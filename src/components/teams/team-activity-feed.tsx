import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

const activities = [
    { user: 'Leo', avatar: 'https://i.pravatar.cc/150?u=leo', action: 'completed the "Energy Saver" challenge', time: '5m ago' },
    { user: 'Zara', avatar: 'https://i.pravatar.cc/150?u=zara', action: 'earned 50 points in "Recycling Rookie"', time: '1h ago' },
    { user: 'Max', avatar: 'https://i.pravatar.cc/150?u=max', action: 'joined the team "Eco Warriors"', time: '3h ago' },
    { user: 'Alex', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704a', action: 'unlocked the "Urban Gardener" badge', time: '1d ago' },
];

export function TeamActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Team Activity</CardTitle>
        <CardDescription>What your team has been up to.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
            {activities.map((activity, index) => (
                <li key={index} className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src={activity.avatar} />
                        <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                        <p className="text-sm">
                            <span className="font-semibold text-primary">{activity.user}</span>
                            {' '}
                            {activity.action}
                        </p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                </li>
            ))}
        </ul>
      </CardContent>
    </Card>
  );
}