// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh2Fs190gNWiVTmwTnxY62c-nnmbsBI-o",
  authDomain: "auth-react-firebase-app.firebaseapp.com",
  projectId: "auth-react-firebase-app",
  storageBucket: "auth-react-firebase-app.appspot.com",
  messagingSenderId: "568062197555",
  appId: "1:568062197555:web:6a13060c58a0a2c51f4846"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
