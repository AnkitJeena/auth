import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-cbb6d.firebaseapp.com",
  projectId: "mern-auth-cbb6d",
  storageBucket: "mern-auth-cbb6d.appspot.com",
  messagingSenderId: "848381684330",
  appId: "1:848381684330:web:14d3d4292ac8f05a99f813"
};

export const app = initializeApp(firebaseConfig);