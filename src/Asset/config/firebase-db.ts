// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUtEHTEEnpTKYhnaPZGE8f0oKvtb1YB6o",
  authDomain: "nigeria-navy-47da4.firebaseapp.com",
  projectId: "nigeria-navy-47da4",
  storageBucket: "nigeria-navy-47da4.appspot.com",
  messagingSenderId: "484793071629",
  appId: "1:484793071629:web:257444524c890bfc2ebd44",
  measurementId: "G-9PWJR0138X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

// COLLECTION
export const BIODATA_COLLECTION = "biodata";
export const NOK_GUARDIAN_COLLECTION = "nok_guardian";
export const EDUCATION_INFO_COLLECTION = "education_info";
export const SSCE_GRADE_COLLECTION = "ssce_grade";
export const ADDITIONAL_INFO_COLLECTION = "additional_info";
export const APPLICATION_ID = "application_id";
// export const FRONTEND_101_TOC_COLLECTION_REF = collection(
//   firestore,
//   FRONTEND_101_TOC_COLLECTION
// );
