import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";


export const firebaseConfig = {
  apiKey: "AIzaSyDyJmvgIURmE6hoHQr8GygUy7R31HbBB4s",
  authDomain: "duckland-3737c.firebaseapp.com",
  projectId: "duckland-3737c",
  storageBucket: "duckland-3737c.appspot.com",
  messagingSenderId: "347696128075",
  appId: "1:347696128075:web:00882e9b5e8b59451eedce"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);