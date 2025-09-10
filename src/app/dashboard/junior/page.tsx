
'use client';

import { CurrentQuest } from '@/components/dashboard/current-quest';
import { Header } from '@/components/layout/header';
import { SidebarNav } from '@/components/layout/sidebar-nav';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gamepad2, Rocket, BrainCircuit } from 'lucide-react';

export default function JuniorDashboardPage() {
  const { user, userData, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/');
      } else if (userData?.role === 'teacher') {
        router.push('/teacher/dashboard');
      } else if (userData?.age && userData.age >= 17) {
        router.push('/dashboard');
      }
    }
  }, [user, userData, loading, router]);
  
  if (loading || !userData || userData.role !== 'student' || (userData.age && userData.age >= 17)) {
    return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="p-8 bg-background rounded-lg shadow-lg">
            <p className="text-2xl font-bold text-primary">Loading your dashboard...</p>
          </div>
        </div>
    );
  }

  return (
    <SidebarProvider>
      <SidebarNav />
      <div className="flex-1 bg-grid">
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-headline font-bold text-primary">Welcome, {userData?.name || 'Eco-Explorer'}!</h1>
              <p className="text-muted-foreground mt-1">Ready for an adventure to save the planet?</p>
            </div>
          </div>

          <CurrentQuest />

          <div className="grid gap-6 md:grid-cols-3">
             <Card className="bg-yellow-400/20 border-yellow-500/50 hover:shadow-lg hover:-translate-y-1 transition-all">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <BrainCircuit className="w-8 h-8 text-yellow-600"/>
                        <CardTitle className="font-headline text-2xl text-yellow-700">Fun Facts</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-yellow-800">Did you know? A single tree can absorb up to 48 pounds of carbon dioxide per year!</p>
                </CardContent>
            </Card>
             <Card className="bg-blue-400/20 border-blue-500/50 hover:shadow-lg hover:-translate-y-1 transition-all">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <Gamepad2 className="w-8 h-8 text-blue-600"/>
                        <CardTitle className="font-headline text-2xl text-blue-700">Eco Games</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-blue-800">Check out the 'Waste Sorting Challenge' in the learning section to test your skills!</p>
                     <Link href="/learn/waste-management" passHref>
                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Play Now</button>
                    </Link>
                </CardContent>
            </Card>
            <Card className="bg-red-400/20 border-red-500/50 hover:shadow-lg hover:-translate-y-1 transition-all">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <Rocket className="w-8 h-8 text-red-600"/>
                        <CardTitle className="font-headline text-2xl text-red-700">Your Next Mission</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-red-800">Start the 'DIY Compost Bin' challenge and turn your food scraps into garden gold!</p>
                    <Link href="/challenges/diy-compost-bin" passHref>
                        <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">Start Mission</button>
                    </Link>
                </CardContent>
            </Card>
          </div>

        </main>
      </div>
    </SidebarProvider>
  );
}
