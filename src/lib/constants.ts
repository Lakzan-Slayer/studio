import type { LucideIcon } from "lucide-react";
import { LayoutDashboard, ArrowRightLeft, FileText, Sparkles, Newspaper, Landmark } from "lucide-react";

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
    label: "AI Insights",
    href: "/insights",
    icon: Sparkles,
  },
  {
    label: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    label: "News",
    href: "/news",
    icon: Newspaper,
  },
  {
    label: "Accounts",
    href: "/accounts",
    icon: Landmark,
  },
];
