import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyCf2cVG0cshwyOkStuY5I7fI6ud8zll2rQ",
  authDomain: "react-363906.firebaseapp.com",
  projectId: "react-363906",
  storageBucket: "react-363906.appspot.com",
  messagingSenderId: "1096116675004",
  appId: "1:1096116675004:web:997c3182750104e51f8bb9",
};

// Use these for db & auth
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GithubAuthProvider();
export { auth, provider, db };
export default db;