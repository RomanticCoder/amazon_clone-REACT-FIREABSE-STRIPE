// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDDrE4hr84U40OdU5OP3kZpgfkF_zEfdtU",
  authDomain: "fir-cfbe0.firebaseapp.com",
  projectId: "fir-cfbe0",
  storageBucket: "fir-cfbe0.appspot.com",
  messagingSenderId: "781558029013",
  appId: "1:781558029013:web:a1107244339cf5fde2205c"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore();
export const storageService = getStorage(firebaseApp);
