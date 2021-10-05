import * as firebase from 'firebase.app'
import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAjoYU4D6dj5tX6lyeo7gl21XswAb7CfVw",
    authDomain: "la-ilusion--hotel-de-campo.firebaseapp.com",
    projectId: "la-ilusion--hotel-de-campo",
    storageBucket: "la-ilusion--hotel-de-campo.appspot.com",
    messagingSenderId: "284326994857",
    appId: "1:284326994857:web:9558277f0b19ffcdcadab8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)