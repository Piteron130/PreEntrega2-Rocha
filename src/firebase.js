import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3UjEkEWkL6rwlWR1VjOdfO5WXw0V2LRs",
  authDomain: "comision-54030-e6c41.firebaseapp.com",
  projectId: "comision-54030-e6c41",
  storageBucket: "comision-54030-e6c41.appspot.com",
  messagingSenderId: "728271594788",
  appId: "1:728271594788:web:14d74ec79cf13928493fb1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
