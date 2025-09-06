import { Header } from '@/components/layout/header';
import { SidebarNav } from '@/components/layout/sidebar-nav';
import { TeamActivityFeed } from '@/components/teams/team-activity-feed';
import { TeamLeaderboard } from '@/components/teams/team-leaderboard';
import { YourTeam } from '@/components/teams/your-team';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Users } from 'lucide-react';

export default function TeamsPage() {
  return (
    <SidebarProvider>
      <SidebarNav />
      <div className="flex-1 bg-grid">
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8">
            <div className="flex justify-between items-start">
                <div>
                <h1 className="text-3xl font-headline font-bold text-primary flex items-center gap-2">
                    <Users className="w-8 h-8 text-accent" />
                    Teams
                </h1>
                <p className="text-muted-foreground mt-1">
                    Collaborate with your peers and compete in challenges.
                </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <YourTeam />
                    <TeamActivityFeed />
                </div>
                <div className="lg:col-span-1">
                    <TeamLeaderboard />
                </div>
            </div>
        </main>
      </div>
    </SidebarProvider>
  );
}