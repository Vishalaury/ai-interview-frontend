
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY  ,
  authDomain: "interviewiq-60650.firebaseapp.com",
  projectId: "interviewiq-60650",
  storageBucket: "interviewiq-60650.firebasestorage.app",
  messagingSenderId: "794358096991",
  appId: "1:794358096991:web:84ad30021d374168aca7ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account"
});

export {auth , provider}