import { LearningModuleCard } from '@/components/learn/learning-module-card';
import { Header } from '@/components/layout/header';
import { SidebarNav } from '@/components/layout/sidebar-nav';
import { SidebarProvider } from '@/components/ui/sidebar';
import { learningModules } from '@/lib/modules-data';
import { BookOpen } from 'lucide-react';

export default function LearnPage() {
  return (
    <SidebarProvider>
      <SidebarNav />
      <div className="flex-1 bg-grid">
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8">
            <div className="flex justify-between items-start">
                <div>
                <h1 className="text-3xl font-headline font-bold text-primary flex items-center gap-2">
                    <BookOpen className="w-8 h-8 text-accent" />
                    Learning Modules
                </h1>
                <p className="text-muted-foreground mt-1">
                    Expand your knowledge and become an eco-expert.
                </p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {learningModules.map((module) => (
                    <LearningModuleCard key={module.id} {...module} />
                ))}
            </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
