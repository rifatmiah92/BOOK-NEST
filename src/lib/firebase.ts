import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHNYyEmI-2wT0hU6YGEZ4EPa2q19r1SUM",
  authDomain: "remontada-task.firebaseapp.com",
  projectId: "remontada-task",
  storageBucket: "remontada-task.firebasestorage.app",
  messagingSenderId: "843808371242",
  appId: "1:843808371242:web:b3dfd1ed4cf43056754953",
  measurementId: "G-XLG6ZV376K"
};

// Initialize Firebase app once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export Auth and Analytics (Analytics only runs in the browser)
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = typeof window !== "undefined" ? 
  isSupported().then(yes => yes ? getAnalytics(app) : null) : null;
  
export default app;
