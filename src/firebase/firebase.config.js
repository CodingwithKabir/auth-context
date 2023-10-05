// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtlzmoTssbvAEFqRur94Mk1b3N5c6BFQ8",
  authDomain: "context-85de2.firebaseapp.com",
  projectId: "context-85de2",
  storageBucket: "context-85de2.appspot.com",
  messagingSenderId: "912708749375",
  appId: "1:912708749375:web:f7e40d9d35031c454a108a"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


