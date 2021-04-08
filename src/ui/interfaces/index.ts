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
