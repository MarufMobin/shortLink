import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
    // apiKey: "YOUR_API_KEY",
    // authDomain: "YOUR_AUTH_DOMAIN",
    // projectId: "YOUR_PROJECT_ID",
    // storageBucket: "YOUR_STORAGE_BUCKET",
    // messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    // appId: "YOUR_APP_ID",
    apiKey: "AIzaSyDNSFUHM2AWipq62jpmhoJmfSQ-ktIfuKQ",
    authDomain: "short-url-8005b.firebaseapp.com",
    projectId: "short-url-8005b",
    storageBucket: "short-url-8005b.appspot.com",
    messagingSenderId: "536080472875",
    appId: "1:536080472875:web:5bd0e7388385d97a7d836e"
  };

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;