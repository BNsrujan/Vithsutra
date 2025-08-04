// Types for menu items
export type MenuItem = {
    title: string;
    description: string;
    href: string;
  };
  
export type MenuSection = {
    title: string;
    description: string;
    href: string;
    items: MenuItem[];
  };
  
  