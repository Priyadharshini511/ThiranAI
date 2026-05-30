// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxpQzgLbaPPOX709cd8SxYCC9f3iakDJI",
  authDomain: "thiranai-4964c.firebaseapp.com",
  projectId: "thiranai-4964c",
  storageBucket: "thiranai-4964c.firebasestorage.app",
  messagingSenderId: "37395633971",
  appId: "1:37395633971:web:e945b42f5cd2b61e581046",
  measurementId: "G-Z66V105EE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// ✅ Export Firebase Authentication instance
const auth = getAuth(app);
export { auth };