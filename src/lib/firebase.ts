
// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2qhNbOf55ONyYHgNE3e8tSj0AwE4nOQM",
  authDomain: "ecoquest-d35ef.firebaseapp.com",
  projectId: "ecoquest-d35ef",
  storageBucket: "ecoquest-d35ef.firebasestorage.app",
  messagingSenderId: "1073480947439",
  appId: "1:1073480947439:web:55383e63fa07035b676d1a",
  measurementId: "G-D63XPJG9VV"
};

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
