import {
  auth,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  db,
  doc,
  setDoc,
} from "./firebase.js";

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

export { isLoggedIn, logoutUser };

document.addEventListener("DOMContentLoaded", function () {
  const userFullName = document.getElementById("userFullName");
  const userName = document.getElementById("userName");
  const userPhoneNumber = document.getElementById("phoneNumber");
  const userEmail = document.getElementById("userEmail");
  const userPassword = document.getElementById("userPassword");
  let userGender = ""; // Variable para almacenar el género seleccionado
  const maleRadioButton = document.getElementById("male");
  const femaleRadioButton = document.getElementById("female");
  // Función para verificar qué botón de radio de género está seleccionado
  const checkGender = () => {
    if (maleRadioButton.checked) {
      userGender = "Male";
    } else if (femaleRadioButton.checked) {
      userGender = "Female";
    } else {
      // En caso de que ningún botón de radio esté seleccionado
      userGender = "";
    }
  };

  const forgotPassword = document.getElementById("forgot-pwd-btn");

  const signInButton = document.getElementById("signInButton");
  const signUpButton = document.getElementById("signUpButton");
  const errorText = document.getElementById("error-text");

  const sendForgotPasswordEmail = () => {
    const email = userEmail.value; // Assuming userEmail is already defined in your code
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Se ha mandado un correo de recuperacion");
      })
      .catch((error) => {
        errorText.textContent = error.message;
      });
  };

  const userSignUp = async () => {
    const signUpFullName = userFullName.value;
    const signUpName = userName.value;
    const signUpEmail = userEmail.value;
    const signUpPassword = userPassword.value;
    const signUpPhoneNumber = userPhoneNumber.value;


    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      .then(async () => {
        const user = auth.currentUser;
        if (user) {
          const uid = user.uid;

          await setDoc(doc(db, "users", uid), {
            name: signUpFullName,
            userName: signUpName,
            phoneNumber: signUpPhoneNumber,
            gender: userGender, 
            creditsAvailable: 0,
            membership: "sessions",
            profilePicture: `${Math.floor(Math.random() * 6)}.jpg`,
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

  maleRadioButton.addEventListener("click", checkGender);
  femaleRadioButton.addEventListener("click", checkGender);

  signUpButton.addEventListener("click", userSignUp);
  signInButton.addEventListener("click", userSignIn);
  forgotPassword.addEventListener("click", sendForgotPasswordEmail);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is authenticated.");
    } else {
      console.log("User is not authenticated.");
    }
  });
});
