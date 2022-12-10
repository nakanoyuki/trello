import { initializeApp } from "firebase/app";
//Firebase ver9 compliant
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDpnfeiTzWQaQOmtR7GlYs5-KkD5TlNp6s",
  authDomain: "my-trello-35f80.firebaseapp.com",
  projectId: "my-trello-35f80",
  storageBucket: "my-trello-35f80.appspot.com",
  messagingSenderId: "966006280417",
  appId: "1:966006280417:web:8bda4d53a25a24c6f5e7a0",
});

//Firebase ver9 compliant
export const storage = getStorage(firebaseApp);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const provider = new GoogleAuthProvider();
