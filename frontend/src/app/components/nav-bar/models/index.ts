export type NavItem = {
  label: string;
  link?: string;
  children?: NavItems;
};

export type NavItems = NavItem[];
