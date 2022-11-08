// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore/lite";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiFpSgh0Ltsz8Tev9i9Kg_lv7HtA30WYw",
  authDomain: "disneyplus-clone-c02c8.firebaseapp.com",
  projectId: "disneyplus-clone-c02c8",
  storageBucket: "disneyplus-clone-c02c8.appspot.com",
  messagingSenderId: "444797713193",
  appId: "1:444797713193:web:19e04a6decec84e1fa1538",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

const auth = getAuth();

export { auth, provider, storage };
export default db;
