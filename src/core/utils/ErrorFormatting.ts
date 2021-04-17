import { UnpackNestedValue } from 'react-hook-form';

/*
 ** handles extracting error string from react hook form error object
 */
export const handleErrorMessage = (errors: any, key: string) => {
  if (!errors) return '';
  const getErrorFieldName = key.split('.');
  const fieldName =
    errors[getErrorFieldName[0]] &&
    errors[getErrorFieldName[0]][getErrorFieldName[1]];
  if (typeof fieldName === 'string') return errors[fieldName];
  else if (fieldName?.type === 'required') return 'Required';
  else if (fieldName?.message) return fieldName.message;
};

type Schema = {
  pattern?: string;
  validate?: Record<string, Array<string>>;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  errorMessage?: { [key: string]: string };
};

export type ErrorCondition = {
  [key: string]: {
    value: string | RegExp | boolean | undefined;
    message: string | boolean;
    validate?: () => void;
  };
};

/*
 ** change schema in response json to how react hook form expects error cases
 */
export const handleErrorConditionsFormat = (
  schema?: Schema,
  watch?: UnpackNestedValue<any>
): ErrorCondition => {
  const errorConditions: ErrorCondition = {};
  let customValidation = {};
  if (schema) {
    for (const key in schema) {
      // skip errorMessage object
      if (key === 'errorMessage') continue;
      if (key === 'required') {
        errorConditions[key] = {
          value: schema[key],
          message: (schema.errorMessage && schema.errorMessage[key]) || '',
        };
      } else if (key === 'pattern' && schema.pattern) {
        errorConditions[key] = {
          value: new RegExp(schema.pattern),
          message: (schema.errorMessage && schema.errorMessage[key]) || '',
        };
      } else if (
        key === 'validate' &&
        schema.validate &&
        typeof watch === 'function'
      ) {
        const mainInputs = (key: number): boolean | string[] | undefined =>
          schema.validate &&
          typeof schema.validate.$eq[key] === 'string' &&
          schema.validate.$eq[key].split('.');
        const inputs = (key: number) => {
          const inputObject = watch(mainInputs(0)?.[0]);
          if (inputObject) {
            return inputObject[mainInputs(key)?.[1]];
          }
        };
        if (typeof inputs(0) === 'string' && typeof inputs(1) === 'string') {
          customValidation = {
            validate: () =>
              inputs(0) === inputs(1) ||
              (schema.errorMessage && schema.errorMessage[key]) ||
              '',
          };
        }
      } else {
        errorConditions[key] = {
          value: schema[key],
          message: (schema.errorMessage && schema.errorMessage[key]) || '',
        };
      }
    }
  }
  return { ...customValidation, ...errorConditions };
};
