import { Header } from '@/components/layout/header';
import { SidebarNav } from '@/components/layout/sidebar-nav';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Check, Flame, Upload } from 'lucide-react';

const challengeDetails = {
    title: '30-Day Recycling Streak',
    description: 'Properly recycle your waste for 30 days straight to earn the Recycling Champion badge. Track your daily recycling efforts and upload a weekly summary of your sorted items.',
    category: 'Waste Reduction',
    points: 100,
    progress: 20,
    status: 'In Progress',
    tasks: [
        { name: 'Day 1-7: Weekly Log', completed: true },
        { name: 'Day 8-14: Weekly Log', completed: false },
        { name: 'Day 15-21: Weekly Log', completed: false },
        { name: 'Day 22-30: Final Log & Reflection', completed: false },
    ]
};


export default function ChallengeDetailPage({ params }: { params: { challengeId: string } }) {
  return (
    <SidebarProvider>
      <SidebarNav />
      <div className="flex-1 bg-grid">
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8">
            <div className="max-w-4xl mx-auto">
                <Card className="overflow-hidden">
                    <CardHeader className="p-0">
                         <div className="bg-accent/20 p-6 md:p-8">
                            <Badge variant="secondary" className="mb-2">{challengeDetails.category}</Badge>
                            <CardTitle className="text-3xl font-headline text-primary">{challengeDetails.title}</CardTitle>
                            <CardDescription className="mt-2 text-lg">{challengeDetails.description}</CardDescription>
                         </div>
                    </CardHeader>
                    <CardContent className="p-6 md:p-8">
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-semibold text-primary">Your Progress</h3>
                                    <span className="font-bold text-accent">{challengeDetails.progress}% Complete</span>
                                </div>
                                <Progress value={challengeDetails.progress} className="h-4 [&>div]:bg-accent" />
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-primary mb-4">Challenge Tasks</h3>
                                <div className="space-y-3">
                                    {challengeDetails.tasks.map((task, index) => (
                                        <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${task.completed ? 'bg-success' : 'bg-muted-foreground/50'}`}>
                                                {task.completed && <Check className="w-4 h-4 text-success-foreground" />}
                                            </div>
                                            <span className={`flex-1 ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                                                {task.name}
                                            </span>
                                            <Button variant="ghost" size="sm" disabled={!task.completed}>View</Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="bg-muted/50 p-6 md:p-8">
                         <Button size="lg" className="w-full md:w-auto ml-auto bg-accent hover:bg-accent/90">
                            <Upload className="mr-2 h-5 w-5" />
                            Upload Proof of Completion
                         </Button>
                    </CardFooter>
                </Card>
            </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
