"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { CheckCircle, CircleDashed, Flame, Zap } from 'lucide-react';
import Link from 'next/link';

interface ChallengeCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  points: number;
  progress: number;
  status: 'Not Started' | 'In Progress' | 'Completed';
}

const statusConfig = {
    'Not Started': {
        icon: CircleDashed,
        color: 'text-muted-foreground',
        bg: 'bg-muted/20',
        progressBg: 'bg-muted/50',
        buttonText: 'Start Challenge',
        buttonVariant: 'default' as const,
    },
    'In Progress': {
        icon: Flame,
        color: 'text-amber-500',
        bg: 'bg-amber-500/10',
        progressBg: '[&>div]:bg-amber-500',
        buttonText: 'Continue',
        buttonVariant: 'secondary' as const,
    },
    'Completed': {
        icon: CheckCircle,
        color: 'text-green-500',
        bg: 'bg-green-500/10',
        progressBg: '[&>div]:bg-green-500',
        buttonText: 'View Submission',
        buttonVariant: 'outline' as const,
    }
}

export function ChallengeCard({ id, title, description, category, points, progress, status }: ChallengeCardProps) {
    const config = statusConfig[status];
    const Icon = config.icon;

  return (
    <Card className={cn("flex flex-col hover:shadow-xl transition-shadow", config.bg)}>
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <Badge variant="secondary" className="mb-2">{category}</Badge>
                <CardTitle className="font-headline text-lg">{title}</CardTitle>
            </div>
            <div className={cn("flex items-center gap-1 font-bold", config.color)}>
                <Zap className="w-5 h-5" />
                <span>{points}</span>
            </div>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="flex justify-between items-center text-sm">
            <span className={cn("font-semibold flex items-center gap-1.5", config.color)}>
                <Icon className="w-4 h-4" />
                {status}
            </span>
            {progress > 0 && <span className='font-medium text-muted-foreground'>{progress}%</span>}
        </div>
        <Progress value={progress} className={cn("h-2", config.progressBg)} />
      </CardContent>
      <CardFooter>
        <Button asChild variant={config.buttonVariant} className="w-full">
          <Link href={`/challenges/${id}`}>
            {config.buttonText}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
