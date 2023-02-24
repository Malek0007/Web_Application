// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-46aec.firebaseapp.com",
  projectId: "mern-estate-46aec",
  storageBucket: "mern-estate-46aec.appspot.com",
  messagingSenderId: "219785797679",
  appId: "1:219785797679:web:774fa6bf72cc06746466da"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);