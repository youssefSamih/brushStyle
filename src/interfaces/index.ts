import { ReactElement, ElementType } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export interface Section {
  widget: string;
  label?: string;
  column?: number;
  type?: string;
  placeholder?: string;
  name?: string;
  useFormMthods?: UseFormReturn<FieldValues>;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  options?: {
    label: string;
    value: string;
  }[];
  $if?: ifProps;
}
export interface ifProps {
  $eq?: string[];
  defaultValue?: string;
}

export type Tab = {
  title: string;
  content: ReactElement | ElementType | string;
};

export interface ImageProps {
  bg?: string;
  heightInherit?: boolean;
}
