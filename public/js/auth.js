import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
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

const isLoggedIn = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            resolve(!!user);
        });
    });
};

export { isLoggedIn }

document.addEventListener("DOMContentLoaded", function () {
    const userEmail = document.getElementById("userEmail");
    const userPassword = document.getElementById("userPassword");
    const signInButton = document.getElementById("signInButton");
    const signUpButton = document.getElementById("signUpButton");

    const userSignUp = async () => {
        const signUpEmail = userEmail.value;
        const signUpPassword = userPassword.value;

        createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                window.location.href = "../index.html";
            })
            .catch((error) => {
                console.log(error.code + error.message);
            });
    };

    const userSignIn = async () => {
        const signInEmail = userEmail.value;
        const signInPassword = userPassword.value;

        signInWithEmailAndPassword(auth, signInEmail, signInPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                window.location.href = "../index.html";
            })
            .catch((error) => {
                console.log(error.code + error.message);
            });
    };

    signUpButton.addEventListener("click", userSignUp);
    signInButton.addEventListener("click", userSignIn);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("User is authenticated.");
        } else {
            console.log("User is not authenticated.");
        }
    });
});
