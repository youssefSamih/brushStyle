import { ReactElement, ElementType } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { DefaultTheme, StyledComponent } from 'styled-components';

export interface RendererData {
  sections: {
    widget: string;
    images: {
      uri: string;
      alt: string;
    }[];
  }[];
}

export interface SliderProps {
  images: ImageType[];
  slidesToShow?: number;
  showDots?: boolean;
  slidesToScroll?: number;
  marginBottom?: number;
  marginRightSlideItem?: number;
}

export interface widgetFormProps {
  widget: string;
  label?: string;
  column?: number;
  columnWidget?: number;
  type?: string;
  placeholder?: string;
  name?: string;
  useFormMthods?: UseFormReturn<FieldValues>;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  loading?: boolean;
  canHideInputValue?: boolean;
  images?: ImageType[];
  link?: string;
  options?: {
    label: string;
    value: string;
  }[];
  $if?: ifProps;
  schema?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    errorMessage?: {
      pattern?: string;
      minLength?: string;
      maxLength?: string;
      validate?: string;
    };
  };
}
export type Section = widgetFormProps & SliderProps;
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
  heightImage?: number;
}
export interface authErrorResponse {
  a?: unknown;
  code?: string;
  message: string;
}

export interface authContextPops {
  user: any;
  loading: boolean;
  msg?: authErrorResponse;
  signInWithEmailAndPassword: (
    email: string,
    password: string,
    redirect: string
  ) => Promise<void>;
  createUserWithEmailAndPassword: (
    email: string,
    password: string,
    redirect: string,
    rest: any
  ) => Promise<void>;
  forgotPassword: (emailAddress: string) => Promise<void>;
  signout: () => Promise<any>;
  sendEmailConfirmation: (redirect?: string) => Promise<void>;
}

export interface ImageType {
  uri: string;
  alt?: string;
}

export type StyledDiv = StyledComponent<
  'div',
  DefaultTheme,
  Record<string, any>,
  never
>;
