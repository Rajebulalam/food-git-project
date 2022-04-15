// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0NWg_RNRn_YJe9IUo8rDWAsvAP6ToSiQ",
    authDomain: "food-git-project.firebaseapp.com",
    projectId: "food-git-project",
    storageBucket: "food-git-project.appspot.com",
    messagingSenderId: "276034287289",
    appId: "1:276034287289:web:3b2e550eaf270d71900d68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;