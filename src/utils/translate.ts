import translationData from 'data/translation.json';
import { authErrorResponse } from 'interfaces';
export const translate = (errorObject: authErrorResponse) => {
  return (
    (errorObject &&
      translationData.filter((tr) => tr.code === errorObject.code)?.[0]) ||
    errorObject
  );
};
