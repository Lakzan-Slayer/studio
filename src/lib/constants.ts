import type { LucideIcon } from "lucide-react";
import { LayoutDashboard, ArrowRightLeft, FileText, Newspaper, Calculator } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Transactions",
    href: "/transactions",
    icon: ArrowRightLeft,
  },
  {
    label: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    label: "Tax Calculator",
    href: "/tax-calculator",
    icon: Calculator,
  },
  {
    label: "News",
    href: "/news",
    icon: Newspaper,
  },
];
