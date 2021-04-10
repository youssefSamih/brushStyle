import { ReactElement, ElementType } from 'react';

export interface Section {
  widget: string;
  label?: string;
  column?: number;
}

export type Tab = {
  title: string;
  content: ReactElement | ElementType | string;
};

export interface ImageProps {
  bg?: string;
  heightInherit?: boolean;
}
