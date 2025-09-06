import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Award, Shield, Star } from "lucide-react";

const topStudents = [
  { name: "Maria S.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e", points: 1250 },
  { name: "Chen L.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f", points: 1100 },
  { name: "Alex G.", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704a", points: 980 },
];

export function ClassOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Class Overview: Eco-Warriors</CardTitle>
        <CardDescription>A snapshot of your class's overall progress.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          <div className="p-4 rounded-lg bg-secondary text-center">
            <p className="text-sm font-medium text-muted-foreground">Average Eco-Points</p>
            <p className="text-3xl font-bold text-primary">850</p>
          </div>
          <div className="p-4 rounded-lg bg-secondary text-center">
            <p className="text-sm font-medium text-muted-foreground">Missions Completed</p>
            <p className="text-3xl font-bold text-primary">42</p>
          </div>
          <div className="p-4 rounded-lg bg-secondary text-center">
            <p className="text-sm font-medium text-muted-foreground">Active Students</p>
            <p className="text-3xl font-bold text-primary">24</p>
          </div>
        </div>

        <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Top 3 Eco-Champions</h3>
            <div className="space-y-4">
                {topStudents.map((student, index) => (
                    <div key={student.name} className="flex items-center p-3 rounded-lg bg-muted/50">
                        {index === 0 && <Award className="w-6 h-6 text-yellow-500 mr-3"/>}
                        {index === 1 && <Shield className="w-6 h-6 text-gray-400 mr-3"/>}
                        {index === 2 && <Star className="w-6 h-6 text-orange-500 mr-3"/>}
                        <Avatar className="h-10 w-10">
                            <AvatarImage src={student.avatar} alt={student.name} />
                            <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4 flex-grow">
                            <p className="font-semibold text-primary">{student.name}</p>
                            <p className="text-sm text-muted-foreground">{student.points.toLocaleString()} points</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
