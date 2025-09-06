"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as icons from "lucide-react";
import { Progress } from "../ui/progress";

type LucideIconName = keyof typeof icons;

interface ActionCardProps {
  title: string;
  description: string;
  buttonText: string;
  iconName: LucideIconName;
  color: "blue" | "green" | "orange";
}

const colorVariants = {
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-600",
    progress: "bg-blue-500",
    button: "bg-blue-600 hover:bg-blue-600/90",
    iconBg: "bg-blue-100",
  },
  green: {
    bg: "bg-green-500/10",
    text: "text-green-600",
    progress: "bg-green-500",
    button: "bg-green-600 hover:bg-green-600/90",
    iconBg: "bg-green-100",
  },
  orange: {
    bg: "bg-orange-500/10",
    text: "text-orange-600",
    progress: "bg-orange-500",
    button: "bg-orange-600 hover:bg-orange-600/90",
    iconBg: "bg-orange-100",
  },
};

export function ActionCard({
  title,
  description,
  buttonText,
  iconName,
  color,
}: ActionCardProps) {
  const Icon = icons[iconName] as icons.LucideIcon;
  const variants = colorVariants[color];

  return (
    <Card className={cn(
      "flex flex-col group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 h-full",
      variants.bg
    )}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <CardTitle className={cn("font-headline text-2xl", variants.text)}>
              {title}
            </CardTitle>
            <CardDescription className={cn("text-sm", variants.text, "opacity-70")}>
              {description}
            </CardDescription>
          </div>
          <div className={cn("p-3 rounded-lg", variants.iconBg)}>
            <Icon className={cn("w-7 h-7", variants.text)} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex items-center justify-center p-6">
        {title === "Learn" && (
            <div className="w-full text-center space-y-2">
                <p className="font-semibold text-primary/90">Module Progress</p>
                <Progress value={60} className={cn("h-3 [&>div]:", variants.progress)} />
                <p className="text-sm text-muted-foreground">6 of 10 modules completed</p>
            </div>
        )}
        {title === "Act" && (
            <p className="text-center text-lg font-semibold text-primary/90">"Plant 3 trees in your area"</p>
        )}
        {title === "Inspire" && (
            <p className="text-center text-lg font-semibold text-primary/90">"12 classmates inspired"</p>
        )}
      </CardContent>
      <div className="p-4 bg-white/40 dark:bg-black/10 mt-auto">
        <Button className={cn("w-full text-white", variants.button)}>
          {buttonText}
        </Button>
      </div>
    </Card>
  );
}
