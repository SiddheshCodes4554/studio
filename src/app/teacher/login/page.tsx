
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/icons/logo';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function TeacherLoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // In a real app, you'd have authentication logic here.
    // For this prototype, we'll just navigate to the teacher dashboard.
    router.push('/teacher/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-grid p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/80 via-indigo-50/80 to-blue-100/80 dark:from-purple-900/50 dark:via-indigo-900/30 dark:to-blue-900/50 -z-10" />
      
      <Card className="w-full max-w-md shadow-2xl border-2 border-primary/10">
        <CardHeader className="text-center">
            <div className="mx-auto mb-4">
                <Logo className="w-16 h-16 text-primary" />
            </div>
          <CardTitle className="text-3xl font-headline text-primary">Teacher Portal</CardTitle>
          <CardDescription className="text-lg">Welcome Back, Educator!</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="teacher@greenleap.edu" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Login as Teacher
            </Button>
            <div className="text-center text-sm text-muted-foreground">
                <p>Not a teacher? <Link href="/" className="font-semibold text-primary hover:underline">Go to Student Login</Link></p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
