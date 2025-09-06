"use client";

import { Leaf, ShieldQuestion, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";

export function CurrentQuest() {
  const progress = 65;

  return (
    <Card className="overflow-hidden bg-gradient-to-tr from-green-100 via-teal-50 to-blue-100 dark:from-green-900/50 dark:via-teal-900/30 dark:to-blue-900/50 shadow-lg border-2 border-green-200/50 dark:border-green-800/50">
      <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-grow space-y-4 w-full">
          <div className="flex items-center gap-3">
            <ShieldQuestion className="w-8 h-8 text-primary" />
            <div>
              <h2 className="font-headline text-xl font-bold tracking-tight text-primary/80">
                Current Quest
              </h2>
              <p className="text-3xl font-bold font-headline text-primary">
                Waste Warriors Mission
              </p>
            </div>
          </div>
          
          <div className="space-y-3 pt-4">
             <div className="flex justify-between items-end">
                <p className="text-sm font-medium text-primary/80">Your Progress (Level 3)</p>
                <p className="text-2xl font-bold text-green-600">{progress}%</p>
             </div>
            <Progress value={progress} className="h-4 bg-green-200 [&>div]:bg-green-500" />
          </div>
        </div>
        
        <div className="flex-shrink-0 flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/50 dark:bg-black/20">
            <div className="relative">
                <Star className="w-24 h-24 text-accent" fill="currentColor" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-accent-foreground">
                    <span className="font-bold text-xl leading-none">Eco</span>
                    <span className="text-xs font-medium">Guardian</span>
                </div>
            </div>
          <p className="font-bold text-lg text-primary -mt-2">Rank 5</p>
          <Button className="animate-pulse bg-primary hover:bg-primary/90">View Next Challenge</Button>
        </div>
      </CardContent>
    </Card>
  );
}
