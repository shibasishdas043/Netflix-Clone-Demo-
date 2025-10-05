// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
    addDoc,
    collection,
    getFirestore
} from "firebase/firestore";
import { toast } from "react-toastify";
  

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxemEziK8HJYtsMzFJ3N54ZSxA-VTEF7w",
  authDomain: "netflix-clone-demo-3ecac.firebaseapp.com",
  projectId: "netflix-clone-demo-3ecac",
  storageBucket: "netflix-clone-demo-3ecac.firebasestorage.app",
  messagingSenderId: "102067044971",
  appId: "1:102067044971:web:54d9a76e26a5b528c1e72e",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

//for authentication
const auth = getAuth(app);

// for database
const db = getFirestore(app);

//for sign up
const signup = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      autProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error.code);
    toast.error(error.code.replace(/[/ -]/g, " "));
  }
};

//for login
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error.code);
    toast.error(error.code.replace(/[/ -]/g, " "));
  }
};

//for logout
const logout = async () => {
  try {
    signOut(auth);
    toast.error("Logged Out !")
  } catch (error) {
    console.log(error.code);
    toast.error(error.code.replace(/[/ -]/g, " "));
  }
};

export { auth, db, login, signup, logout };
