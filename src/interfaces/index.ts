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
}

export type Tab = {
  title: string;
  content: ReactElement | ElementType | string;
};

export interface ImageProps {
  bg?: string;
  heightInherit?: boolean;
}
