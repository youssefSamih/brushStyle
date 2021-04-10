import { ReactElement, ElementType } from 'react';

export interface Section {
  widget: string;
}

export type Tab = {
  title: string;
  content: ReactElement | ElementType | string;
};
