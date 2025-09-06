import { Award, Leaf, Shield, Sprout, Star, Wind } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";


const badges = [
    { name: 'Eco Starter', icon: Sprout, color: 'text-green-500', unlocked: true },
    { name: 'Recycling Rookie', icon: Leaf, color: 'text-blue-500', unlocked: true },
    { name: 'Energy Saver', icon: Wind, color: 'text-yellow-500', unlocked: true },
    { name: 'Community Helper', icon: Shield, color: 'text-purple-500', unlocked: true },
    { name: 'Water Guardian', icon: Award, color: 'text-teal-500', unlocked: false },
    { name: 'Forest Friend', icon: Star, color: 'text-orange-500', unlocked: false },
];

export function UnlockedBadges() {
  return (
    <Card>
        <CardHeader>
            <CardTitle className="font-headline">Your Badge Collection</CardTitle>
            <CardDescription>Celebrate your achievements and show off your skills.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
                {badges.map((badge) => (
                    <div key={badge.name} className={cn("flex flex-col items-center gap-2 p-4 rounded-lg border-2", badge.unlocked ? 'border-accent/50 bg-accent/10' : 'border-dashed bg-muted/50 opacity-50')}>
                        <div className={cn("w-16 h-16 rounded-full flex items-center justify-center", badge.unlocked ? 'bg-accent/20' : 'bg-muted')}>
                           <badge.icon className={cn("w-8 h-8", badge.unlocked ? badge.color : 'text-muted-foreground')} />
                        </div>
                        <p className="font-semibold text-sm text-primary">{badge.name}</p>
                        <Badge variant={badge.unlocked ? 'success' : 'outline'}>
                            {badge.unlocked ? 'Unlocked' : 'Locked'}
                        </Badge>
                    </div>
                ))}
            </div>
        </CardContent>
    </Card>
  );
}
