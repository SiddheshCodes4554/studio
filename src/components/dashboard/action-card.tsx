"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as icons from "lucide-react";

type LucideIconName = keyof typeof icons;

interface ActionCardProps {
  title: string;
  description: string;
  buttonText: string;
  iconName: LucideIconName;
  gradient: string;
}

export function ActionCard({
  title,
  description,
  buttonText,
  iconName,
  gradient,
}: ActionCardProps) {
  const Icon = icons[iconName] as icons.LucideIcon;

  return (
    <Card className="flex flex-col group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <CardHeader
        className={cn(
          "bg-gradient-to-br p-6",
          gradient
        )}
      >
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <CardTitle className="font-headline text-2xl text-primary">
              {title}
            </CardTitle>
            <CardDescription className="text-primary/80">
              {description}
            </CardDescription>
          </div>
          <div className="p-3 bg-white/50 rounded-lg">
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        {title === "Learn" && (
            <div className="text-center">
                <p className="font-semibold mb-2">Your Progress</p>
                <div className="relative w-32 h-32 mx-auto">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                            className="text-muted"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                        />
                        <path
                            className="text-secondary"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeDasharray="60, 100"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">60%</span>
                    </div>
                </div>
            </div>
        )}
        {title === "Act" && (
            <p className="text-center text-lg font-semibold text-primary/90">"Plant 3 trees in your area"</p>
        )}
        {title === "Inspire" && (
            <p className="text-center text-lg font-semibold text-primary/90">"12 classmates inspired"</p>
        )}
      </CardContent>
      <CardFooter className="p-6">
        <Button className="w-full bg-primary hover:bg-primary/90 group-hover:animate-pulse">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
