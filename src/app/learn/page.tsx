import { LearningModuleCard } from '@/components/learn/learning-module-card';
import { Header } from '@/components/layout/header';
import { SidebarNav } from '@/components/layout/sidebar-nav';
import { SidebarProvider } from '@/components/ui/sidebar';
import { BookOpen } from 'lucide-react';

const learningModules = [
  {
    id: 'intro-to-climate-change',
    title: 'Introduction to Climate Change',
    category: 'Climate Science',
    progress: 100,
    imageUrl: 'https://picsum.photos/600/400?random=10',
    dataAiHint: 'climate change',
  },
  {
    id: 'sustainable-living',
    title: 'Sustainable Living Practices',
    category: 'Lifestyle',
    progress: 75,
    imageUrl: 'https://picsum.photos/600/400?random=11',
    dataAiHint: 'sustainable living',
  },
  {
    id: 'importance-of-biodiversity',
    title: 'The Importance of Biodiversity',
    category: 'Ecosystems',
    progress: 50,
    imageUrl: 'https://picsum.photos/600/400?random=12',
    dataAiHint: 'biodiversity forest',
  },
  {
    id: 'renewable-energy',
    title: 'Renewable Energy Sources',
    category: 'Energy',
    progress: 25,
    imageUrl: 'https://picsum.photos/600/400?random=13',
    dataAiHint: 'solar panels',
  },
  {
    id: 'waste-management',
    title: 'Waste Management and Recycling',
    category: 'Waste Reduction',
    progress: 0,
    imageUrl: 'https://picsum.photos/600/400?random=14',
    dataAiHint: 'recycling plant',
  },
  {
    id: 'water-conservation',
    title: 'Water Conservation Techniques',
    category: 'Water',
    progress: 0,
    imageUrl: 'https://picsum.photos/600/400?random=15',
    dataAiHint: 'water conservation',
  },
];

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
