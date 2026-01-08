"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import {
  businessNavItems,
  personalNavItems,
  type NavItem,
} from "@/components/app/nav-items"

function NavGroup({
  label,
  items,
}: {
  label: string
  items: NavItem[]
}) {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const active = pathname === item.href
            const Icon = item.icon

            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild isActive={active}>
                  <Link href={item.href}>
                    <Icon className={cn("size-4")} />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1.5">
          <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-lg font-semibold">
            T
          </div>
          <div className="group-data-[collapsible=icon]:hidden">
            <div className="text-sm font-semibold leading-none">Tony Finance</div>
            <div className="text-muted-foreground text-xs leading-none">
              個人＋獨資
            </div>
          </div>
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <NavGroup label="Personal" items={personalNavItems} />
        <NavGroup label="Business" items={businessNavItems} />
      </SidebarContent>
    </Sidebar>
  )
}


