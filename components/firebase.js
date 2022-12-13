// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7zEnTgeBvlMwXU15612XZxc5Yiu0ik28",
  authDomain: "edtech-26828.firebaseapp.com",
  projectId: "edtech-26828",
  storageBucket: "edtech-26828.appspot.com",
  messagingSenderId: "336915509856",
  appId: "1:336915509856:web:d3f2760d97dd6b25b0c905"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getDatabase(app);