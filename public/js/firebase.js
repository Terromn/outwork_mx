import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, doc, setDoc, updateDoc, getDoc} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCExcWv1RxenkllDOiERix1EoN66ZUh-J4",
    authDomain: "outwork-f8f3f.firebaseapp.com",
    databaseURL: "https://outwork-f8f3f-default-rtdb.firebaseio.com",
    projectId: "outwork-f8f3f",
    storageBucket: "outwork-f8f3f.appspot.com",
    messagingSenderId: "296052478452",
    appId: "1:296052478452:web:ade9633ec13ce6b59029a1",
    measurementId: "G-CVLBGXKKLW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    app, 

    auth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,

    db,
    doc,
    setDoc,
    updateDoc,
    getDoc,
};
