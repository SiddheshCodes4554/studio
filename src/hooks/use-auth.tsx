
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { differenceInYears } from 'date-fns';

interface UserData {
    uid: string;
    name: string;
    email: string;
    role: 'student' | 'teacher';
    age?: number;
    // Student specific
    college?: string;
    rollNo?: string;
    dob?: string;
    abcId?: string;
    // Teacher specific
    school?: string;
}

interface AuthContextType {
  user: User | null;
  userData: UserData | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<any>;
  signup: (email: string, pass: string, studentData: Omit<UserData, 'role' | 'school' | 'uid' | 'age'>) => Promise<any>;
  logout: () => Promise<any>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        setUser(user);
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if(userDoc.exists()) {
            const fetchedUserData = userDoc.data() as UserData;
            setUserData(fetchedUserData);
            // Redirect after user data is fetched
            if (fetchedUserData.role === 'teacher') {
                router.push('/teacher/dashboard');
            } else if (fetchedUserData.age && fetchedUserData.age < 17) {
                router.push('/dashboard/junior');
            } else {
                router.push('/dashboard');
            }
        }
      } else {
        setUser(null);
        setUserData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const login = (email: string, pass: string) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const signup = async (email: string, pass:string, studentData: Omit<UserData, 'role' | 'school' | 'uid' | 'age'>) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
    const { user } = userCredential;
    
    const age = differenceInYears(new Date(), new Date(studentData.dob!));

    const userDocRef = doc(db, 'users', user.uid);
    const fullUserData: UserData = {
        uid: user.uid,
        ...studentData,
        age,
        role: 'student'
    }
    await setDoc(userDocRef, fullUserData);
    setUserData(fullUserData);
    return userCredential;
  };

  const logout = () => {
    return signOut(auth);
  };

  const value = {
    user,
    userData,
    loading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
