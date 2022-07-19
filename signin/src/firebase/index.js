// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAjSCpctPtKZ9ZXqS9HXFx-ZHhxFWdZK_w",
  authDomain: "signin-1f5dd.firebaseapp.com",
  projectId: "signin-1f5dd",
  storageBucket: "signin-1f5dd.appspot.com",
  messagingSenderId: "212024524677",
  appId: "1:212024524677:web:d3bbcf91e84fbd6d938eec",
  measurementId: "G-GQCCCECEJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth= getAuth(app);

export{ auth }