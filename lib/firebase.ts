import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDDlFSAgUKdljxaNLdxSiQ_MRGh-dN2yUc",
    authDomain: "portfolio-6fbf3.firebaseapp.com",
    projectId: "portfolio-6fbf3",
    storageBucket: "portfolio-6fbf3.firebasestorage.app",
    messagingSenderId: "312801957822",
    appId: "1:312801957822:web:3c3cfe4ba05499008bcbef",
    measurementId: "G-P1114Q5BFK"
};

// Initialize Firebase only if it hasn't been initialized yet
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { app, db };
