import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC7oeiFeBU-LoRydwQ0_JgvjPGiG5cKlC4",
    authDomain: "fir-authentication-afec2.firebaseapp.com",
    projectId: "fir-authentication-afec2",
    storageBucket: "fir-authentication-afec2.appspot.com",
    messagingSenderId: "543870263597",
    appId: "1:543870263597:web:6a6d1e303888a9f12fb3a4"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);