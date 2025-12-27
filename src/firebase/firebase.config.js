import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  // apiKey: "AIzaSyAzqg3xdAnmwrnFS8brOSNFnWCU51QmDnc",
  // authDomain: "social-event-client.firebaseapp.com",
  // projectId: "social-event-client",
  // storageBucket: "social-event-client.firebasestorage.app",
  // messagingSenderId: "1088915411792",
  // appId: "1:1088915411792:web:9d9a5b82e6f79319ba1255",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
