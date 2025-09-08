"use client";

import { Bell, Menu, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";

export function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
       <div className="flex md:hidden">
         <SidebarTrigger asChild>
            <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Sidebar</span>
            </Button>
         </SidebarTrigger>
       </div>
       <div className="hidden items-center gap-2 md:flex">
        <div className="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
        <p className="text-sm font-medium text-muted-foreground">Monitoring Live Eco-System</p>
       </div>
      
      <div className="ml-auto flex items-center gap-2 md:gap-4">
        <div className="flex items-center gap-2 rounded-full border bg-accent/50 px-3 py-1.5 text-sm font-semibold text-accent-foreground">
          <Sparkles className="h-5 w-5 animate-pulse text-accent" />
          <span>3,450</span>
          <span className="hidden sm:inline">Eco-Points</span>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704a" alt="User" />
          <AvatarFallback>AG</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
