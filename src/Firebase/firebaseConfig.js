import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAJ0XDAbqd8NzSvwrJr55bDzV5xaM_pARc",
  authDomain: "fb-alba.firebaseapp.com",
  projectId: "fb-alba",
  storageBucket: "fb-alba.appspot.com",
  messagingSenderId: "698969649559",
  appId: "1:698969649559:web:481428d46cd3f4ff1ed4d2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

