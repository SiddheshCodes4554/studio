
'use client';

import { Header } from '@/components/layout/header';
import { SidebarNav } from '@/components/layout/sidebar-nav';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { learningModules } from '@/lib/modules-data';
import { ModuleContent } from '@/app/learn/content/module-content';
import { notFound, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ModuleDetailPage({ params }: { params: { moduleId: string } }) {
  const router = useRouter();
  // Find the module, but create a local copy of its progress to avoid direct mutation issues
  // in some strict React environments. The source data will be updated directly in handleModuleComplete.
  const moduleDetails = learningModules.find(m => m.id === params.moduleId);

  if (!moduleDetails) {
    notFound();
  }
  
  const [isCompleted, setIsCompleted] = useState(moduleDetails.progress === 100);

  const handleModuleComplete = () => {
    // In a real app, you'd update the backend here.
    // For this prototype, we find the module in our "database" (the imported array)
    // and mutate its progress directly. This change will be reflected on the /learn page
    // because the same array instance is used.
    const moduleToUpdate = learningModules.find(m => m.id === params.moduleId);
    if (moduleToUpdate) {
      moduleToUpdate.progress = 100;
    }
    
    setIsCompleted(true);
    
    // Redirect back to the main learning page after a short delay
    setTimeout(() => {
        router.push('/learn');
    }, 500);
  };


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
                           <ModuleContent module={moduleDetails} onModuleComplete={handleModuleComplete} isModuleCompleted={isCompleted} />
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    </SidebarProvider>
  );
}
