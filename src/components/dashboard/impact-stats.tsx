"use client";

import { Droplets, Recycle, Trees } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { useEffect, useState } from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

function AnimatedCounter({ value }: { value: number }) {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      if (value === 0) {
        setCount(0);
        return;
      }
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
    bgColor: "bg-green-100 dark:bg-green-900/50"
  },
  {
    name: "Waste Segregated",
    value: 890,
    unit: "kg",
    icon: Recycle,
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/50"
  },
  {
    name: "Water Saved",
    value: 12300,
    unit: "liters",
    icon: Droplets,
    color: "text-sky-500",
    bgColor: "bg-sky-100 dark:bg-sky-900/50"
  },
];

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 273 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Eco-Points",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig


export function ImpactStats() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="font-headline">Your Impact</CardTitle>
        <CardDescription>A summary of your environmental contributions.</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.name} className={cn("p-4 rounded-lg flex items-center gap-4", stat.bgColor)}>
              <div className={cn("p-3 rounded-full bg-white/80 dark:bg-black/20", stat.color)}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.name}</p>
                <p className="text-2xl font-bold text-primary">
                  <AnimatedCounter value={stat.value} />
                  {stat.unit && <span className="text-base font-medium text-muted-foreground ml-1">{stat.unit}</span>}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
            <h3 className="font-semibold text-primary mb-2">Monthly Eco-Points</h3>
            <ChartContainer config={chartConfig} className="h-[200px] w-full">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
              </BarChart>
            </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
