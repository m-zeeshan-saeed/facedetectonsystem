// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBSHSVYtCdErM39FCO0acEtBfIetG7rVfw",
  authDomain: "fypproject-4d536.firebaseapp.com",
  projectId: "fypproject-4d536",
  storageBucket: "fypproject-4d536.appspot.com",
  messagingSenderId: "178411888901",
  appId: "1:178411888901:web:55252eb2645bef5c82d76c",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
