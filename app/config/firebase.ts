import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLvB19ydHH7McpxEqKEm_qmx4uFp7_rxM",
  authDomain: "churnsolution.firebaseapp.com",
  projectId: "churnsolution",
  storageBucket: "churnsolution.firebasestorage.app",
  messagingSenderId: "978858294222",
  appId: "1:978858294222:web:62629937514ba55eb5099f",
  measurementId: "G-M2VC94SS4M",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
