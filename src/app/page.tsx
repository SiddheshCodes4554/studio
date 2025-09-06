
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/icons/logo';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // In a real app, you'd have authentication logic here.
    // For this prototype, we'll just navigate to the dashboard.
    router.push('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-grid p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/80 via-teal-50/80 to-blue-100/80 dark:from-green-900/50 dark:via-teal-900/30 dark:to-blue-900/50 -z-10" />
      
      <Card className="w-full max-w-md shadow-2xl border-2 border-primary/10">
        <CardHeader className="text-center">
            <div className="mx-auto mb-4">
                <Logo className="w-16 h-16 text-primary" />
            </div>
          <CardTitle className="text-3xl font-headline text-primary">Welcome to GreenLeap</CardTitle>
          <CardDescription className="text-lg">Your Digital Forest Academy</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="student@greenleap.edu" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Login
            </Button>
            <div className="text-center text-sm text-muted-foreground">
                <p>Are you a teacher? <Link href="/teacher/dashboard" className="font-semibold text-primary hover:underline">Go to Teacher Dashboard</Link></p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
