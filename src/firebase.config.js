import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyC6eLMcWokg8LpEwBTrEr6a3j75z1km-Js",
  authDomain: "multimartweb.firebaseapp.com",
  projectId: "multimartweb",
  storageBucket: "multimartweb.appspot.com",
  messagingSenderId: "298935821123",
  appId: "1:298935821123:web:f47df455fe45dcf3bb45f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app