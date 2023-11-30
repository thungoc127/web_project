// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUZUSD_YCxKMz2JaHKZrWS-7-ykA378xM",
  authDomain: "task-management-tool-20caa.firebaseapp.com",
  projectId: "task-management-tool-20caa",
  storageBucket: "task-management-tool-20caa.appspot.com",
  messagingSenderId: "449284939263",
  appId: "1:449284939263:web:335eaa1d838f51ff83dbca",
  measurementId: "G-XK176GRLG7"
};

 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
