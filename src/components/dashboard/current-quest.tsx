"use client";

import { Leaf, ShieldQuestion, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const LeafIcon = ({ filled, style }: { filled: boolean, style?: React.CSSProperties }) => (
    <Leaf 
        className={`w-6 h-6 transition-colors duration-500 ${filled ? 'text-green-500' : 'text-green-200'}`} 
        fill={filled ? 'currentColor' : 'none'}
        style={style}
    />
);

const CustomProgressBar = ({ progress }: { progress: number }) => {
    const milestones = [25, 50, 75, 100];
  
    return (
      <div className="w-full">
        <div className="relative h-2.5 w-full rounded-full bg-green-200">
          <div
            className="h-2.5 rounded-full bg-green-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
           <div className="absolute -top-6 -left-1 w-full flex justify-between items-center">
            {milestones.map((milestone, index) => (
                <LeafIcon key={index} filled={progress >= milestone} style={{transform: 'translateX(-50%)', left: `${milestone}%`, position: 'absolute'}}/>
            ))}
           </div>
        </div>
      </div>
    );
};


export function CurrentQuest() {
  return (
    <Card className="overflow-hidden bg-gradient-to-tr from-green-100 via-teal-50 to-blue-100 shadow-lg">
      <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-grow space-y-4">
          <div className="flex items-center gap-2">
            <ShieldQuestion className="w-6 h-6 text-primary" />
            <h2 className="font-headline text-2xl font-bold tracking-tight text-primary">
              Current Quest
            </h2>
          </div>
          <p className="text-4xl font-bold font-headline text-primary/90">
            Waste Warriors Mission: Level 3
          </p>
          <div className="space-y-4 pt-4">
            <p className="text-sm font-medium text-primary/80">Your Progress:</p>
            <CustomProgressBar progress={65} />
          </div>
        </div>
        <div className="flex-shrink-0 flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/50">
            <div className="relative">
                <Star className="w-24 h-24 text-accent" fill="currentColor" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">Eco</span>
            </div>
          <p className="font-bold text-lg text-primary">Eco-Guardian</p>
          <Button className="animate-pulse bg-primary hover:bg-primary/90">Next Challenge</Button>
        </div>
      </CardContent>
    </Card>
  );
}
