"use client";

import { Droplets, Recycle, Trees } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useEffect, useState } from "react";

function AnimatedCounter({ value }: { value: number }) {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let startTime: number | null = null;
      const duration = 1500;
  
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
  
      requestAnimationFrame(animate);
      
      return () => {
        startTime = null;
      }
    }, [value]);
  
    return <span>{count.toLocaleString()}</span>;
}

const stats = [
  {
    name: "Trees Planted",
    value: 142,
    icon: Trees,
    color: "text-green-500",
  },
  {
    name: "Waste Segregated (kg)",
    value: 890,
    icon: Recycle,
    color: "text-blue-500",
  },
  {
    name: "Water Saved (liters)",
    value: 12300,
    icon: Droplets,
    color: "text-sky-500",
  },
];

export function ImpactStats() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="font-headline">Your Impact</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {stats.map((stat) => (
            <div key={stat.name} className="flex items-center gap-4">
              <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="flex-grow">
                <p className="text-sm text-muted-foreground">{stat.name}</p>
                <p className="text-3xl font-bold text-primary">
                  <AnimatedCounter value={stat.value} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
