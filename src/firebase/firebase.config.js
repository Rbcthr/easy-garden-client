// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTZq7KZf9cYA837q0b__bLq7Ie-6nB3TU",
    authDomain: "assignment-10-banana.firebaseapp.com",
    projectId: "assignment-10-banana",
    storageBucket: "assignment-10-banana.firebasestorage.app",
    messagingSenderId: "209830496974",
    appId: "1:209830496974:web:7c3b2eb7ef0c438f849e9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);