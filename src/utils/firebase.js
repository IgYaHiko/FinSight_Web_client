// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdRvtl13KDuC_ORF9swdGMykx4HNLAJnw",
  authDomain: "finsightweb.firebaseapp.com",
  projectId: "finsightweb",
  storageBucket: "finsightweb.firebasestorage.app",
  messagingSenderId: "931109256267",
  appId: "1:931109256267:web:ecd44bcdf729f1083521ce",
  measurementId: "G-8197Y0M1P5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider} 