

 type NavItem = {
    label: string;
    link: string;
   
}

type NavbarLink = NavItem & { children?: NavItem[] }

export type NavbarLinks = NavbarLink[];