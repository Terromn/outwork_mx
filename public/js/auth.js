import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,

    db,
    doc,
    setDoc,
} from './firebase.js';

const isLoggedIn = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            resolve(!!user);
        });
    });
};

const logoutUser = async () => {
    try {
        await signOut(auth);
        console.log("User has been logged out.");
        // You can perform additional actions here after logout if needed.
    } catch (error) {
        console.error("Error logging out:", error);
    }
};

export { isLoggedIn, logoutUser }

document.addEventListener("DOMContentLoaded", function () {


    const userEmail = document.getElementById("userEmail");
    const userPassword = document.getElementById("userPassword");
    const userName = document.getElementById("userName");

    const signInButton = document.getElementById("signInButton");
    const signUpButton = document.getElementById("signUpButton");
    const errorText = document.getElementById("error-text");

    const userSignUp = async () => {
        const signUpName = userName.value;
        const signUpEmail = userEmail.value;
        const signUpPassword = userPassword.value;

        createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
            .then(async () => {
                const user = auth.currentUser;
                if (user) {
                    const uid = user.uid;

                    await setDoc(doc(db, "users", uid), {
                        name: signUpName,
                        creditsAvailable: 0,
                        reservedClasses: [],
                        profilePicture: `${Math.floor(Math.random() * 6)}.jpg`

                    }).then(() => {
                        window.location.href = "../index.html";

                    });


                } else {
                    console.log("User is not authenticated.");
                }
            })
            .catch((error) => {
                errorText.textContent = error.message;
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
                errorText.textContent = error.message;

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
