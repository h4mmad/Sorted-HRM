// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw0oM0puoOjlEnn9bbWI25Vi0VP6PgyRk",
  authDomain: "employee-b808c.firebaseapp.com",
  projectId: "employee-b808c",
  storageBucket: "employee-b808c.appspot.com",
  messagingSenderId: "449726478506",
  appId: "1:449726478506:web:4466291176e9b40c31f8d3",
  measurementId: "G-LJEDSX5WZ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
