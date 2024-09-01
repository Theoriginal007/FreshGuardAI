// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCsuTzLWYTYUYQpoaTWQj2nkWyStT02C-I",

  authDomain: "freshguardai.firebaseapp.com",

  projectId: "freshguardai",

  storageBucket: "freshguardai.appspot.com",

  messagingSenderId: "895483727204",

  appId: "1:895483727204:web:7d84c267df830d2546be71",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
