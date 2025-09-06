"use client";

import {
  BookOpen,
  LayoutDashboard,
  LineChart,
  ShieldCheck,
  Users,
  GraduationCap
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from 'next/link';
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
import { Badge } from "../ui/badge";

export function SidebarNav() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/learn", label: "Learning", icon: BookOpen },
    { href: "/challenges", label: "Challenges", icon: ShieldCheck, badge: "3" },
    { href: "/teams", label: "Teams", icon: Users },
    { href: "/impact", label: "My Impact", icon: LineChart },
  ];

  const teacherMenuItems = [
    { href: "/teacher/dashboard", label: "Teacher Dashboard", icon: GraduationCap },
  ]

  return (
    <Sidebar className="border-r">
      <SidebarHeader>
        <div className="flex items-center gap-2.5">
          <Logo className="w-9 h-9 text-sidebar-primary" />
          <div className="flex flex-col">
          <span className="text-lg font-headline font-semibold text-sidebar-primary">
            GreenLeap
          </span>
          <span className="text-xs text-sidebar-primary/70 -mt-1">Digital Forest Academy</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} passHref>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  asChild
                  className="h-10"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && <Badge className="ml-auto bg-accent text-accent-foreground">{item.badge}</Badge>}
                  </div>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
         <SidebarMenu className="mt-auto">
           {teacherMenuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} passHref>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  asChild
                  className="h-10"
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </div>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
         <div className="flex items-center gap-3 p-2 rounded-lg bg-sidebar-accent">
            <Avatar className="h-10 w-10 border-2 border-sidebar-border">
              <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704a" alt="User" />
              <AvatarFallback>AG</AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
                <p className="text-sm font-semibold truncate text-sidebar-accent-foreground">Alex Green</p>
                <p className="text-xs text-sidebar-accent-foreground/70 truncate">Eco-Guardian</p>
            </div>
         </div>
      </SidebarFooter>
    </Sidebar>
  );
}
