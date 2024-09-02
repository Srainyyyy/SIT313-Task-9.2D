// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlSYthZmJBar5t9hopDH5rE7DhfPW-7vE",
  authDomain: "deakin-web-app-6c8b3.firebaseapp.com",
  projectId: "deakin-web-app-6c8b3",
  storageBucket: "deakin-web-app-6c8b3.appspot.com",
  messagingSenderId: "326647920895",
  appId: "1:326647920895:web:a4d957622f80f4ba4234ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore services
export const auth = getAuth(app);
export const db = getFirestore(app);
