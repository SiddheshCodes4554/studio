import { Header } from '@/components/layout/header';
import { SidebarNav } from '@/components/layout/sidebar-nav';
import { ClassOverview } from '@/components/teacher/class-overview';
import { ImpactSnapshot } from '@/components/teacher/impact-snapshot';
import { MissionAssignment } from '@/components/teacher/mission-assignment';
import { StudentProgressTracker } from '@/components/teacher/student-progress-tracker';
import { Button } from '@/components/ui/button';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Download, GraduationCap } from 'lucide-react';

export default function TeacherDashboardPage() {
  return (
    <SidebarProvider>
      <SidebarNav />
      <div className="flex-1 bg-grid">
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-headline font-bold text-primary flex items-center gap-2">
                <GraduationCap className="w-8 h-8 text-accent" />
                Teacher Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">
                Monitor your class's eco-journey and impact.
              </p>
            </div>
            <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Report
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
                <ClassOverview />
            </div>
            <div className="lg:col-span-1">
                <ImpactSnapshot />
            </div>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <StudentProgressTracker />
            <MissionAssignment />
          </div>

        </main>
      </div>
    </SidebarProvider>
  );
}
