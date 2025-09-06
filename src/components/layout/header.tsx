"use client";

import { Bell, ChevronRight, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
       <div className="md:hidden">
         <SidebarTrigger />
       </div>
      <nav className="hidden md:flex items-center text-sm font-medium text-muted-foreground">
        <span className="text-primary">Dashboard</span>
      </nav>
      <div className="ml-auto flex items-center gap-4">
        <div className="flex items-center gap-2 rounded-full bg-accent/50 px-3 py-1.5 text-sm font-semibold text-accent-foreground">
          <Sparkles className="h-5 w-5 text-accent animate-pulse" />
          <span>3,450 Eco-Points</span>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704a" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
