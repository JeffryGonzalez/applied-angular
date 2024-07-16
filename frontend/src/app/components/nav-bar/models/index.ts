

 export type NavItem = {
    label: string;
    link: string;
   
}

export type NavbarLink = NavItem & { children?: NavItem[] }

export type NavbarLinks = NavbarLink[];