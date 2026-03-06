import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD7z7h_b2ZqG4hhcSPGQA2qGXT9EYvjclY",
  authDomain: "simuladorbursatil-9b176.firebaseapp.com",
  projectId: "simuladorbursatil-9b176",
  storageBucket: "simuladorbursatil-9b176.firebasestorage.app",
  messagingSenderId: "127578790155",
  appId: "1:127578790155:web:e91bf193bdfe440ff76a0e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)