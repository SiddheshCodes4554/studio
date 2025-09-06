import { Header } from '@/components/layout/header';
import { SidebarNav } from '@/components/layout/sidebar-nav';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SidebarProvider } from '@/components/ui/sidebar';
import { CheckCircle, PlayCircle, Star } from 'lucide-react';
import Image from 'next/image';

const moduleDetails = {
    title: 'Introduction to Climate Change',
    category: 'Climate Science',
    description: 'An overview of the science behind climate change, its causes, impacts, and the global efforts to combat it.',
    imageUrl: 'https://picsum.photos/800/450?random=10',
    dataAiHint: 'climate change science',
    content: [
        { type: 'video', title: 'The Greenhouse Effect Explained', duration: '5:30 min', completed: true },
        { type: 'reading', title: 'Understanding Global Warming Potentials', duration: '10 min read', completed: true },
        { type: 'quiz', title: 'Knowledge Check: Causes of Climate Change', duration: '10 questions', completed: false },
        { type: 'video', title: 'Impacts on Ecosystems', duration: '7:15 min', completed: false },
    ]
}

export default function ModuleDetailPage({ params }: { params: { moduleId: string } }) {
  return (
    <SidebarProvider>
        <SidebarNav />
        <div className="flex-1 bg-grid">
            <Header />
            <main className="flex-1 p-4 sm:p-6 lg:p-8">
                <div className="max-w-5xl mx-auto">
                    <Card className="overflow-hidden">
                        <CardHeader className="p-0 relative">
                             <Image 
                                src={moduleDetails.imageUrl} 
                                alt={moduleDetails.title}
                                width={800}
                                height={450}
                                data-ai-hint={moduleDetails.dataAiHint} 
                                className="w-full h-64 object-cover" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6 md:p-8">
                                <CardTitle className="text-4xl font-headline text-white">{moduleDetails.title}</CardTitle>
                                <CardDescription className="text-lg text-white/90 mt-1">{moduleDetails.description}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 md:p-8">
                            <h3 className="text-xl font-semibold text-primary mb-4">Module Content</h3>
                            <div className="space-y-4">
                                {moduleDetails.content.map((item, index) => (
                                    <div key={index} className="flex items-center p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                                        <div className="mr-4">
                                            {item.completed ? (
                                                <CheckCircle className="w-8 h-8 text-success" />
                                            ) : (
                                                <PlayCircle className="w-8 h-8 text-muted-foreground" />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-semibold">{item.title}</p>
                                            <p className="text-sm text-muted-foreground">{item.duration}</p>
                                        </div>
                                        <Button variant={item.completed ? 'ghost' : 'default'}>
                                            {item.completed ? 'Review' : 'Start'}
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    <div className="mt-8 text-center">
                        <Button size="lg" className="bg-success hover:bg-success/90">
                           <Star className="mr-2 h-5 w-5"/> Mark Module as Complete
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    </SidebarProvider>
  );
}
