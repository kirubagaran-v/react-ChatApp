// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuBm-oSGhVUHHyeHM4h9utfWnVxn0tt18",
  authDomain: "chatapp-569e1.firebaseapp.com",
  projectId: "chatapp-569e1",
  storageBucket: "chatapp-569e1.firebasestorage.app",
  messagingSenderId: "186983033749",
  appId: "1:186983033749:web:f2fe31e25a68aee5a9a49c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
