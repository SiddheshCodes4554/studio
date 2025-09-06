import Image from "next/image";
import { Heart, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";

const feedItems = [
  {
    id: 1,
    user: "Alex G.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    action: "completed the 'Urban Gardening' challenge!",
    image: "https://picsum.photos/400/300?random=1",
    dataAiHint: "urban garden",
    likes: 15,
    comments: 3,
    time: "2h ago"
  },
  {
    id: 2,
    user: "Maria S.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    action: "earned the",
    badge: "Water Guardian",
    likes: 22,
    comments: 5,
    time: "1d ago"
  },
  {
    id: 3,
    user: "Chen L.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    action: "started the 'Composting Basics' module.",
    likes: 8,
    comments: 1,
    time: "3d ago"
  },
];

export function SocialFeed() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="font-headline">Community Feed</CardTitle>
        <CardDescription>See what your fellow guardians are up to.</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto pr-4">
        <div className="space-y-6">
          {feedItems.map((item) => (
            <div key={item.id} className="flex gap-3">
              <Avatar className="mt-1">
                  <AvatarImage src={item.avatar} alt={item.user} />
                  <AvatarFallback>{item.user.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-grow space-y-2">
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-primary">{item.user}</span>{" "}
                        {item.action}
                        {item.badge && <Badge variant="secondary" className="ml-1.5">{item.badge}</Badge>}
                    </p>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </div>
                </div>

                {item.image && (
                  <Image
                    src={item.image}
                    alt="User submission"
                    width={400}
                    height={300}
                    data-ai-hint={item.dataAiHint}
                    className="rounded-lg border object-cover aspect-[4/3]"
                  />
                )}
                <div className="flex items-center gap-4 text-muted-foreground">
                      <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
                          <Heart className="w-4 h-4"/>
                          <span className="text-xs font-medium">{item.likes}</span>
                      </button>
                      <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
                          <MessageSquare className="w-4 h-4"/>
                          <span className="text-xs font-medium">{item.comments}</span>
                      </button>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
