import { Award } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { cn } from '@/lib/utils';

const leaderboardData = [
  { rank: 1, name: 'Eco Warriors', points: 12500, avatar: 'https://i.pravatar.cc/150?u=team1' },
  { rank: 2, name: 'Planet Protectors', points: 11200, avatar: 'https://i.pravatar.cc/150?u=team2' },
  { rank: 3, name: 'Green Giants', points: 9800, avatar: 'https://i.pravatar.cc/150?u=team3' },
  { rank: 4, name: 'Recycle Rangers', points: 8500, avatar: 'https://i.pravatar.cc/150?u=team4' },
  { rank: 5, name: 'Aqua Squad', points: 7200, avatar: 'https://i.pravatar.cc/150?u=team5' },
];

export function TeamLeaderboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Leaderboard</CardTitle>
        <CardDescription>Top performing teams this week.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {leaderboardData.map((team, index) => (
            <li key={team.rank} className="flex items-center gap-4 p-2 rounded-lg transition-colors hover:bg-muted/50">
              <div className="font-bold text-lg w-6 text-center">{team.rank}</div>
              <Avatar>
                <AvatarImage src={team.avatar} />
                <AvatarFallback>{team.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <p className="font-semibold text-primary">{team.name}</p>
                <p className="text-sm text-muted-foreground">{team.points.toLocaleString()} points</p>
              </div>
              {team.rank <= 3 && (
                <Award className={cn(
                    "w-6 h-6",
                    team.rank === 1 && "text-yellow-500",
                    team.rank === 2 && "text-gray-400",
                    team.rank === 3 && "text-orange-600"
                )} />
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}