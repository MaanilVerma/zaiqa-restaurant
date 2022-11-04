import { getApp, getApps, initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//TODO: Hide Firebase Credentials

const firebaseConfig = {
  apiKey: "AIzaSyDK-L8xLrwHEsCylgz3zLNnYlhnLbVC_7U",
  authDomain: "food-order-6eacb.firebaseapp.com",
  projectId: "food-order-6eacb",
  storageBucket: "food-order-6eacb.appspot.com",
  messagingSenderId: "306825112878",
  appId: "1:306825112878:web:55d6d01aa99e99ca979ebf",
  measurementId: "G-QN0SVT753X",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
