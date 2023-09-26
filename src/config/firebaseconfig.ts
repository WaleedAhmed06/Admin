// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC38u1qTLSOC3X6FJXauL3Dd1GKcYn9s14",
  authDomain: "fir-authentication-bc609.firebaseapp.com",
  projectId: "fir-authentication-bc609",
  storageBucket: "fir-authentication-bc609.appspot.com",
  messagingSenderId: "203651635165",
  appId: "1:203651635165:web:2fd3013dddb6f704a0c834",
  measurementId: "G-TQ84PB4PST"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);