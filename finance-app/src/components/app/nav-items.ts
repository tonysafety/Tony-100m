import {
  BriefcaseBusinessIcon,
  CalendarClockIcon,
  LandmarkIcon,
  LayoutDashboardIcon,
  ReceiptIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react"
import type * as React from "react"

export type NavItem = {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export const personalNavItems: NavItem[] = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboardIcon },
  { title: "Accounts", href: "/accounts", icon: WalletIcon },
  { title: "Transactions", href: "/transactions", icon: ReceiptIcon },
  { title: "Scheduled", href: "/scheduled", icon: CalendarClockIcon },
  { title: "Projection", href: "/projection", icon: TrendingUpIcon },
]

export const businessNavItems: NavItem[] = [
  { title: "Business", href: "/business", icon: BriefcaseBusinessIcon },
  { title: "Tax (HK)", href: "/tax", icon: LandmarkIcon },
]


