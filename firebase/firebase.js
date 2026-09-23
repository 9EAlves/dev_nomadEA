import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyDeiBBQiuhBaKRTk5FMYkDGvVdKoIrZokE",
  authDomain: "dev-nomad-ea.firebaseapp.com",
  projectId: "dev-nomad-ea",
  storageBucket: "dev-nomad-ea.firebasestorage.app",
  messagingSenderId: "814859632675",
  appId: "1:814859632675:web:1fb7c847d40c12fe5df196",
  measurementId: "G-DJRZ8T6H85"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);