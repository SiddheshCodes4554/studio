
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/icons/logo';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [college, setCollege] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [dob, setDob] = useState('');
  const [abcId, setAbcId] = useState('');

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    if (!dob) {
      toast({
        variant: 'destructive',
        title: 'Signup Failed',
        description: 'Please enter your date of birth.',
      });
      return;
    }
    setLoading(true);
    try {
      const studentData = { name, email, college, rollNo, dob, abcId };
      await signup(email, password, studentData);
      toast({ title: 'Success', description: 'Account created successfully!' });
      // The redirect is now handled by the useAuth hook based on age.
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Signup Failed',
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-grid p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/80 via-teal-50/80 to-blue-100/80 dark:from-green-900/50 dark:via-teal-900/30 dark:to-blue-900/50 -z-10" />
      
      <Card className="w-full max-w-md shadow-2xl border-2 border-primary/10">
        <CardHeader className="text-center">
            <div className="mx-auto mb-4">
                <Logo className="w-16 h-16 text-primary" />
            </div>
          <CardTitle className="text-3xl font-headline text-primary">Create Student Account</CardTitle>
          <CardDescription className="text-lg">Join GreenLeap</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSignup}>
            <div className="space-y-1">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" placeholder="Alex Green" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="student@greenleap.edu" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
             <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="college">College/School Name</Label>
              <Input id="college" type="text" placeholder="Greenwood High" required value={college} onChange={(e) => setCollege(e.target.value)} />
            </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <Label htmlFor="rollNo">Roll No.</Label>
                    <Input id="rollNo" type="text" placeholder="C-123" required value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
                </div>
                 <div className="space-y-1">
                    <Label htmlFor="abcId">ABC ID</Label>
                    <Input id="abcId" type="text" placeholder="1234-5678-9012" required value={abcId} onChange={(e) => setAbcId(e.target.value)} />
                </div>
            </div>
             <div className="space-y-1 flex flex-col">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" type="date" required value={dob} onChange={(e) => setDob(e.target.value)} />
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? 'Creating Account...' : 'Sign Up'}
            </Button>
             <div className="text-center text-sm text-muted-foreground">
                <p>Already have an account? <Link href="/" className="font-semibold text-primary hover:underline">Login here</Link></p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
