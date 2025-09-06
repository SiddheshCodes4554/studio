import { ChallengeCard } from '@/components/challenges/challenge-card';
import { Header } from '@/components/layout/header';
import { SidebarNav } from '@/components/layout/sidebar-nav';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy } from 'lucide-react';

const activeChallenges = [
  {
    id: '30-day-recycling-streak',
    title: '30-Day Recycling Streak',
    description: 'Properly recycle your waste for 30 days straight to earn the Recycling Champion badge.',
    category: 'Waste Reduction',
    points: 100,
    progress: 20,
    status: 'In Progress' as const,
  },
  {
    id: 'community-garden-volunteer',
    title: 'Community Garden Volunteer',
    description: 'Spend 5 hours volunteering at a local community garden. Document your experience.',
    category: 'Community',
    points: 150,
    progress: 0,
    status: 'Not Started' as const,
  },
  {
    id: 'diy-compost-bin',
    title: 'DIY Compost Bin',
    description: 'Build your own compost bin at home from recycled materials. Submit a photo of your creation.',
    category: 'Composting',
    points: 200,
    progress: 0,
    status: 'Not Started' as const,
  },
];

const completedChallenges = [
    {
      id: 'beach-cleanup',
      title: 'Beach Cleanup',
      description: 'Organized a successful beach cleanup event with 15 participants.',
      category: 'Community',
      points: 250,
      progress: 100,
      status: 'Completed' as const,
    },
    {
      id: 'energy-saver',
      title: 'Energy Saver',
      description: 'Reduced household electricity consumption by 15% for a month.',
      category: 'Energy',
      points: 120,
      progress: 100,
      status: 'Completed' as const,
    },
];

export default function ChallengesPage() {
  return (
    <SidebarProvider>
      <SidebarNav />
      <div className="flex-1 bg-grid">
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-headline font-bold text-primary flex items-center gap-2">
                <Trophy className="w-8 h-8 text-accent" />
                Action Challenges
              </h1>
              <p className="text-muted-foreground mt-1">
                Put your knowledge into practice and earn rewards.
              </p>
            </div>
          </div>

          <Tabs defaultValue="active">
            <TabsList>
              <TabsTrigger value="active">Active Challenges</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="active">
              <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
                {activeChallenges.map((challenge, index) => (
                  <ChallengeCard key={index} {...challenge} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="completed">
                <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
                    {completedChallenges.map((challenge, index) => (
                        <ChallengeCard key={index} {...challenge} />
                    ))}
                </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </SidebarProvider>
  );
}
