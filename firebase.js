// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByDqc8YGKsLIlaJKvCbImicFhdtzSfR2c",
  authDomain: "e-commerce-vite.firebaseapp.com",
  projectId: "e-commerce-vite",
  storageBucket: "e-commerce-vite.appspot.com",
  messagingSenderId: "352630636642",
  appId: "1:352630636642:web:295815d23fd632090cd13b",
  measurementId: "G-PDJYZ43KEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);