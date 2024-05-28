import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAcenxZLuZ7oFGJecJijgc7q7vHRCA3OPM",
  authDomain: "first-wave-ai.firebaseapp.com",
  projectId: "first-wave-ai",
  storageBucket: "first-wave-ai.appspot.com",
  messagingSenderId: "1086398872833",
  appId: "1:1086398872833:web:71d874eb39c5ba3f1a6f00",
  measurementId: "G-GMYNJLC6FQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;