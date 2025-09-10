
"use client";

import {
  BookOpen,
  LayoutDashboard,
  LineChart,
  LogOut,
  ShieldCheck,
  Users,
  GraduationCap
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
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
import { Button } from "../ui/button";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";

export function SidebarNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, userData, logout } = useAuth();
  const { toast } = useToast();

  const isTeacherView = userData?.role === 'teacher';

  const handleLogout = async () => {
    try {
        await logout();
        const target = isTeacherView ? '/teacher/login' : '/';
        router.push(target);
        toast({ title: 'Success', description: 'Logged out successfully!' });
    } catch (error: any) {
        toast({ variant: 'destructive', title: 'Logout Failed', description: error.message });
    }
  };

  const menuItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/learn", label: "Learning", icon: BookOpen },
    { href: "/challenges", label: "Challenges", icon: ShieldCheck, badge: "3" },
    { href: "/teams", label: "Teams", icon: Users },
    { href: "/impact", label: "My Impact", icon: LineChart },
  ];

  const teacherMenuItems = [
    { href: "/teacher/dashboard", label: "Teacher Dashboard", icon: GraduationCap },
  ];

  const itemsToRender = isTeacherView ? teacherMenuItems : menuItems;

  // Don't render sidebar on login/signup pages
  if (!user) {
    return null;
  }

  return (
    <Sidebar className="border-r">
      <SidebarHeader>
        <Link href={isTeacherView ? "/teacher/dashboard" : "/dashboard"} className="flex items-center gap-2.5">
          <Logo className="w-9 h-9 text-sidebar-primary" />
          <div className="flex flex-col">
          <span className="text-lg font-headline font-semibold text-sidebar-primary">
            GreenLeap
          </span>
          <span className="text-xs text-sidebar-primary/70 -mt-1">Digital Forest Academy</span>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {itemsToRender.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} passHref>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  className="h-10"
                >
                    <div className="flex items-center gap-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && <Badge className="ml-auto bg-accent text-accent-foreground">{item.badge}</Badge>}
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
         <div className="flex items-center gap-3 p-2 rounded-lg bg-sidebar-accent">
            <Avatar className="h-10 w-10 border-2 border-sidebar-border">
              <AvatarImage src={isTeacherView ? "https://i.pravatar.cc/150?u=teacher" : `https://i.pravatar.cc/150?u=${user.uid}`} alt="User" />
              <AvatarFallback>{userData?.name?.charAt(0) || user?.email?.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
                <p className="text-sm font-semibold truncate text-sidebar-accent-foreground">{userData?.name || (isTeacherView ? 'Educator' : 'Student')}</p>
                <p className="text-xs text-sidebar-accent-foreground/70 truncate">{user?.email}</p>
            </div>
            <Button variant="ghost" size="icon" className="shrink-0 text-sidebar-accent-foreground/70 hover:text-sidebar-accent-foreground hover:bg-sidebar-accent" onClick={handleLogout}>
                <LogOut className="w-5 h-5"/>
            </Button>
         </div>
      </SidebarFooter>
    </Sidebar>
  );
}
