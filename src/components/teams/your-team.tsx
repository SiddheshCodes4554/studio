import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const teamMembers = [
    { name: 'Alex Green', role: 'Team Lead', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704a' },
    { name: 'Maria S.', role: 'Member', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e' },
    { name: 'Chen L.', role: 'Member', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f' },
    { name: 'Leo G.', role: 'Member', avatar: 'https://i.pravatar.cc/150?u=leo' },
];

export function YourTeam() {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-start">
        <div>
            <CardTitle className="font-headline">Your Team: Eco Warriors</CardTitle>
            <CardDescription>4 Members | 12,500 Total Points</CardDescription>
        </div>
        <Button>Invite Members</Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {teamMembers.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center p-4 border rounded-lg bg-background">
                    <Avatar className="w-16 h-16 mb-2">
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <p className="font-semibold text-primary">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}