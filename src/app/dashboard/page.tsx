
import { ActionCard } from '@/components/dashboard/action-card';
import { CurrentQuest } from '@/components/dashboard/current-quest';
import { ImpactStats } from '@/components/dashboard/impact-stats';
import { LearningPathGenerator } from '@/components/dashboard/learning-path-generator';
import { SocialFeed } from '@/components/dashboard/social-feed';
import { Header } from '@/components/layout/header';
import { SidebarNav } from '@/components/layout/sidebar-nav';
import { SidebarProvider } from '@/components/ui/sidebar';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <SidebarNav />
      <div className="flex-1 bg-grid">
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-headline font-bold text-primary">Welcome, Eco-Guardian!</h1>
              <p className="text-muted-foreground mt-1">Let's continue our journey to protect the planet.</p>
            </div>
          </div>

          <CurrentQuest />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/learn">
              <ActionCard
                title="Learn"
                description="Expand your knowledge with our interactive modules."
                buttonText="Continue Learning"
                iconName="BookOpen"
                color="blue"
              />
            </Link>
            <Link href="/challenges">
              <ActionCard
                title="Act"
                description="Take on real-world challenges and make a difference."
                buttonText="Start Mission"
                iconName="ShieldCheck"
                color="green"
              />
            </Link>
            <Link href="/impact">
              <ActionCard
                title="Inspire"
                description="Share your progress and motivate your peers."
                buttonText="Share Impact"
                iconName="Megaphone"
                color="orange"
              />
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ImpactStats />
            </div>
            <div className="lg:col-span-2">
              <SocialFeed />
            </div>
          </div>

          <LearningPathGenerator />
        </main>
      </div>
    </SidebarProvider>
  );
}
