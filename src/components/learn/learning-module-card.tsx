import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import Image from 'next/image';

interface LearningModuleCardProps {
  title: string;
  category: string;
  progress: number;
  imageUrl: string;
  dataAiHint: string;
}

export function LearningModuleCard({ title, category, progress, imageUrl, dataAiHint }: LearningModuleCardProps) {
  const isCompleted = progress === 100;
  const isInProgress = progress > 0 && progress < 100;

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <CardHeader className="p-0 relative">
        <Image 
            src={imageUrl} 
            alt={title}
            width={600}
            height={400}
            data-ai-hint={dataAiHint} 
            className="aspect-video object-cover" 
        />
        <Badge className="absolute top-3 right-3">{category}</Badge>
      </CardHeader>
      <CardContent className="flex-grow p-4 space-y-2">
        <h3 className="font-bold font-headline text-lg text-primary">{title}</h3>
        <div>
            <div className="flex justify-between items-center mb-1 text-sm">
                <span className="font-medium text-muted-foreground">Progress</span>
                <span className={cn("font-bold", isCompleted ? 'text-success' : 'text-primary')}>{progress}%</span>
            </div>
            <Progress value={progress} className={cn("h-2", isCompleted && "[&>div]:bg-success")} />
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-muted/50">
        <Button className="w-full" variant={isCompleted ? "outline" : "default"}>
            {isCompleted ? "Review Module" : isInProgress ? "Continue Learning" : "Start Learning"}
        </Button>
      </CardFooter>
    </Card>
  );
}