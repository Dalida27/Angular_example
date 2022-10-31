// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm97Avvz5_UsfHxR6COZFDdRcUCG29J5A",
  authDomain: "ang-exam-project.firebaseapp.com",
  projectId: "ang-exam-project",
  storageBucket: "ang-exam-project.appspot.com",
  messagingSenderId: "616004006415",
  appId: "1:616004006415:web:3f43b53d93fcf1a115697a",
  measurementId: "G-Z00PERH5JF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);