import Image from "next/image";
import { Heart, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

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
  },
  {
    id: 2,
    user: "Maria S.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    action: "earned the 'Water Guardian' badge.",
    likes: 22,
    comments: 5,
  },
  {
    id: 3,
    user: "Chen L.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    action: "started the 'Composting Basics' module.",
    likes: 8,
    comments: 1,
  },
];

export function SocialFeed() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="font-headline">Community Feed</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {feedItems.map((item) => (
            <div key={item.id} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src={item.avatar} alt={item.user} />
                        <AvatarFallback>{item.user.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <p className="text-sm">
                        <span className="font-semibold text-primary">{item.user}</span>{" "}
                        <span className="text-muted-foreground">{item.action}</span>
                    </p>
                </div>
              {item.image && (
                <Image
                  src={item.image}
                  alt="User submission"
                  width={400}
                  height={300}
                  data-ai-hint={item.dataAiHint}
                  className="rounded-lg border object-cover"
                />
              )}
               <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                        <Heart className="w-4 h-4"/>
                        <span className="text-xs font-medium">{item.likes}</span>
                    </div>
                     <div className="flex items-center gap-1.5">
                        <MessageSquare className="w-4 h-4"/>
                        <span className="text-xs font-medium">{item.comments}</span>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
