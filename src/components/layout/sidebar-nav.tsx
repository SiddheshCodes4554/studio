"use client";

import {
  BookOpen,
  LayoutDashboard,
  LineChart,
  ShieldCheck,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Logo } from "../icons/logo";
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarContent,
  SidebarFooter
} from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function SidebarNav() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/learn", label: "Learning", icon: BookOpen },
    { href: "/challenges", label: "Challenges", icon: ShieldCheck },
    { href: "/teams", label: "Teams", icon: Users },
    { href: "/impact", label: "My Impact", icon: LineChart },
  ];

  return (
    <Sidebar className="border-r">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Logo className="w-8 h-8 text-primary" />
          <span className="text-lg font-headline font-semibold text-primary">
            GreenLeap
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                href={item.href}
                isActive={pathname === item.href}
                asChild
              >
                <a href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
         <div className="flex items-center gap-3 p-2 rounded-lg bg-muted">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704a" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
                <p className="text-sm font-semibold truncate text-foreground">Alex Green</p>
                <p className="text-xs text-muted-foreground truncate">alex.green@example.com</p>
            </div>
         </div>
      </SidebarFooter>
    </Sidebar>
  );
}
