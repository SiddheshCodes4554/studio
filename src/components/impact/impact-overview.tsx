'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Droplets, Recycle, Trees } from 'lucide-react';
import { cn } from '@/lib/utils';


const weeklyData = [
  { name: 'Mon', points: 20 },
  { name: 'Tue', points: 45 },
  { name: 'Wed', points: 30 },
  { name: 'Thu', points: 50 },
  { name: 'Fri', points: 65 },
  { name: 'Sat', points: 80 },
  { name: 'Sun', points: 70 },
];

const stats = [
    {
      name: "Trees Planted",
      value: '142',
      icon: Trees,
      color: "text-green-500",
      bgColor: "bg-green-100 dark:bg-green-900/50"
    },
    {
      name: "Waste Segregated",
      value: '890 kg',
      icon: Recycle,
      color: "text-blue-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/50"
    },
    {
      name: "Water Saved",
      value: '12,300 L',
      icon: Droplets,
      color: "text-sky-500",
      bgColor: "bg-sky-100 dark:bg-sky-900/50"
    },
];

export function ImpactOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Impact Overview</CardTitle>
        <CardDescription>Your eco-contributions and points earned over time.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {stats.map((stat) => (
                <div key={stat.name} className={cn("p-4 rounded-lg flex items-center gap-4", stat.bgColor)}>
                <div className={cn("p-3 rounded-full bg-white/80 dark:bg-black/20", stat.color)}>
                    <stat.icon className="w-6 h-6" />
                </div>
                <div>
                    <p className="text-sm text-muted-foreground">{stat.name}</p>
                    <p className="text-2xl font-bold text-primary">
                        {stat.value}
                    </p>
                </div>
                </div>
            ))}
        </div>
        <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip 
                    contentStyle={{ 
                        borderRadius: 'var(--radius)',
                        border: '1px solid hsl(var(--border))',
                        background: 'hsl(var(--background))'
                    }}
                    cursor={{fill: 'hsl(var(--muted))'}}
                />
                <Bar dataKey="points" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
