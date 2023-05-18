// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: import.meta.env.APIKEY,
//     authDomain: import.meta.env.AUTHDOMAIN,
//     projectId: import.meta.env.PROJECTID,
//     storageBucket: import.meta.env.STORAGEBUCKET,
//     messagingSenderId: import.meta.env.MESSAGINGSENDERID,
//     appId: import.meta.env.APPID
// };

const firebaseConfig = {
    apiKey: "AIzaSyDxv38XQ8-shLBzEvbsLcHUAtOguKSJTJ0",
    authDomain: "assignment11-99cd0.firebaseapp.com",
    projectId: "assignment11-99cd0",
    storageBucket: "assignment11-99cd0.appspot.com",
    messagingSenderId: "1097641179317",
    appId: "1:1097641179317:web:49e356f0aebb56a50466fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app