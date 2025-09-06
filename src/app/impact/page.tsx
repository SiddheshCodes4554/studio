import { ImpactOverview } from '@/components/impact/impact-overview';
import { UnlockedBadges } from '@/components/impact/unlocked-badges';
import { Header } from '@/components/layout/header';
import { SidebarNav } from '@/components/layout/sidebar-nav';
import { SidebarProvider } from '@/components/ui/sidebar';
import { LineChart } from 'lucide-react';

export default function ImpactPage() {
  return (
    <SidebarProvider>
      <SidebarNav />
      <div className="flex-1 bg-grid">
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8">
            <div className="flex justify-between items-start">
                <div>
                <h1 className="text-3xl font-headline font-bold text-primary flex items-center gap-2">
                    <LineChart className="w-8 h-8 text-accent" />
                    My Impact
                </h1>
                <p className="text-muted-foreground mt-1">
                    Track your environmental contributions and achievements.
                </p>
                </div>
            </div>

            <ImpactOverview />
            <UnlockedBadges />
        </main>
      </div>
    </SidebarProvider>
  );
}