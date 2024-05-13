// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK2pHhDbvGHu5sMaXYJV_Bh6AGOQGgfXg",
  authDomain: "healthcare-e3b68.firebaseapp.com",
  projectId: "healthcare-e3b68",
  storageBucket: "healthcare-e3b68.appspot.com",
  messagingSenderId: "12703076318",
  appId: "1:12703076318:web:62848dd830a58da3a7574f",
  measurementId: "G-8CMZ4WYQZR"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
// const analytics = getAnalytics(app);

module.exports = {db}

