import type { ElementType, ReactNode } from 'react';

export interface HeaderProps {
  variant?: string;
  links: {
    id: number;
    name: string;
    href: string;
  }[];
}
export interface ListStyleProps {
  forSidebarLinks?: boolean;
}

export interface InputSProps {
  state?: string;
  border?: boolean;
  bg?: string;
  color?: string;
  size?: number;
  align?: string;
  error?: boolean;
}

export interface StyledButtonProps {
  inactive?: boolean;
  size?: 'large' | 'small' | 'medium';
  variant?: 'secondary' | 'primary';
  state?: string;
  type?: string;
  as?: ElementType;
}

export type ButtonProps = {
  children: ReactNode;
  as?: ElementType;
  type?: string;
  size?: 'large' | 'small' | 'medium';
  onClick?: (e?: any) => void;
  disabled?: boolean;
  loading?: boolean;
} & StyledButtonProps;
