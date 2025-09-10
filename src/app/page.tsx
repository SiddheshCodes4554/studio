
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/icons/logo';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';
import { FormEvent, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const router = useRouter();
  const { login, user, userData, loading } = useAuth();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user && userData) {
      if (userData.role === 'teacher') {
        router.push('/teacher/dashboard');
      } else if (userData.age && userData.age < 17) {
        router.push('/dashboard/junior');
      } else {
        router.push('/dashboard');
      }
    }
  }, [user, userData, loading, router]);


  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await login(email, password);
      toast({ title: 'Success', description: 'Logged in successfully!' });
      // Redirect is now handled by the useEffect and useAuth hook
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading || user) {
    return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="p-8 bg-background rounded-lg shadow-lg">
            <p className="text-2xl font-bold text-primary">Loading...</p>
          </div>
        </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-grid p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/80 via-teal-50/80 to-blue-100/80 dark:from-green-900/50 dark:via-teal-900/30 dark:to-blue-900/50 -z-10" />
      
      <Card className="w-full max-w-md shadow-2xl border-2 border-primary/10">
        <CardHeader className="text-center">
            <div className="mx-auto mb-4">
                <Logo className="w-16 h-16 text-primary" />
            </div>
          <CardTitle className="text-3xl font-headline text-primary">Student Portal</CardTitle>
          <CardDescription className="text-lg">Welcome to GreenLeap</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="student@greenleap.edu" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login as Student'}
            </Button>
            <div className="text-center text-sm text-muted-foreground">
                <p>Don't have an account? <Link href="/signup" className="font-semibold text-primary hover:underline">Sign up here</Link></p>
            </div>
             <div className="text-center text-sm text-muted-foreground pt-4">
                <p>Are you a teacher? <Link href="/teacher/login" className="font-semibold text-primary hover:underline">Login here</Link></p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
