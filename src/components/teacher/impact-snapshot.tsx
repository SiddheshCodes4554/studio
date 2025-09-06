import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Trees, Recycle, Droplets } from 'lucide-react';

const impactStats = [
  { icon: Trees, value: "1,200", label: "Trees Planted by Class", color: "text-green-500" },
  { icon: Recycle, value: "5,400 kg", label: "Waste Recycled", color: "text-blue-500" },
  { icon: Droplets, value: "80,000 L", label: "Water Saved", color: "text-sky-500" },
];

export function ImpactSnapshot() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Class Impact</CardTitle>
        <CardDescription>Your class's collective environmental contribution.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {impactStats.map(stat => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="p-3 bg-muted rounded-full">
                <Icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  );
}
