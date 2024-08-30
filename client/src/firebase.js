import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-54338.firebaseapp.com",
  projectId: "mern-auth-54338",
  storageBucket: "mern-auth-54338.appspot.com",
  messagingSenderId: "1051827590071",
  appId: "1:1051827590071:web:e8c25c3dc3a26e85618e32"
};

export const app = initializeApp(firebaseConfig);