// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUtEHTEEnpTKYhnaPZGE8f0oKvtb1YB6o",
  authDomain: "nigeria-navy-47da4.firebaseapp.com",
  projectId: "nigeria-navy-47da4",
  storageBucket: "nigeria-navy-47da4.appspot.com",
  messagingSenderId: "484793071629",
  appId: "1:484793071629:web:257444524c890bfc2ebd44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
