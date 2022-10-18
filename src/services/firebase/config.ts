// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhafFV9fN3Q0nUfMLGX5Y3hsD0eww1BUo",
  authDomain: "app-control-de-finanzas.firebaseapp.com",
  projectId: "app-control-de-finanzas",
  storageBucket: "app-control-de-finanzas.appspot.com",
  messagingSenderId: "468299320504",
  appId: "1:468299320504:web:e63680ddbc85bebb0e384d",
  measurementId: "G-E415NDDFCN"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// export const db = getFirestore(firebaseApp)
// const analytics = getAnalytics(app);