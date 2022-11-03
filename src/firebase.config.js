import { getApp, getApps, initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCgoQ45vJ1GD75CRnsMc1cBqQ0DbO9qwZ8",
  authDomain: "food-order-app-e73b6.firebaseapp.com",
  projectId: "food-order-app-e73b6",
  storageBucket: "food-order-app-e73b6.appspot.com",
  messagingSenderId: "711806814510",
  appId: "1:711806814510:web:9552dda5372946787352bf",
  measurementId: "G-E4YB7S8C16",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
