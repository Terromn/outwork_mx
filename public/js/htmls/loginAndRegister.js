const signInButton = document.getElementById("signInButton");
const signUpButton = document.getElementById("signUpButton");

const nameInput = document.getElementById("userFullName");
const userNameInput = document.getElementById("userName");

const maleOrFemaleInput = document.getElementById("maleOrFemale");
const numberInput = document.getElementById("phoneNumber");
const emailInput = document.getElementById("userEmail");
const passwordInput = document.getElementById("userPassword");

const forgotPassword = document.getElementById("forgot-pwd-btn");



document.addEventListener("DOMContentLoaded", function () {


    signInButton.addEventListener("click", function () {
        // Add the "btn-green" class and remove the "btn-black" class from the Sign In button.
        signInButton.classList.add("btn-green");
        signInButton.querySelector("p").classList.add("text-invert-color");
        signInButton.classList.remove("btn-black");

        nameInput.classList.add("d-none");
        nameInput.classList.remove("d-block");

        userNameInput.classList.add("d-none");
        userNameInput.classList.remove("d-block");

        maleOrFemaleInput.classList.add("d-none");
        maleOrFemaleInput.classList.remove("d-block");

        numberInput.classList.add("d-none");
        numberInput.classList.remove("d-block");

        emailInput.classList.add("d-block");
        emailInput.classList.remove("d-none");


        // Add the "btn-black" class and remove the "btn-green" class from the Sign Up button.
        signUpButton.classList.add("btn-black");
        signUpButton.querySelector("p").classList.remove("text-invert-color");
        signUpButton.classList.remove("btn-green");

        // Move the Sign In button above the Sign Up button in the DOM.
        signUpButton.parentNode.insertBefore(signInButton, signUpButton);


    });

    forgotPassword.addEventListener("click", function () {
        nameInput.classList.add("d-none");
        nameInput.classList.remove("d-block");

        userNameInput.classList.add("d-none");
        userNameInput.classList.remove("d-block");

        maleOrFemaleInput.classList.add("d-none");
        maleOrFemaleInput.classList.remove("d-block");

        numberInput.classList.add("d-none");
        numberInput.classList.remove("d-block");

        emailInput.classList.add("d-block");
        emailInput.classList.remove("d-none");

        passwordInput.classList.add("d-none");
        passwordInput.classList.remove("d-block")
    })

    signUpButton.addEventListener("click", function () {
        // Add the "btn-green" class and remove the "btn-black" class from the Sign In button.

        // Add the "btn-green" class and remove the "btn-black" class from the Sign In button.
        signInButton.classList.remove("btn-green");
        signInButton.querySelector("p").classList.remove("text-invert-color");
        signInButton.classList.add("btn-black");

        nameInput.classList.add("d-block");
        nameInput.classList.remove("d-none");

        maleOrFemaleInput.classList.add("d-block");
        maleOrFemaleInput.classList.remove("d-none");

        numberInput.classList.add("d-block");
        numberInput.classList.remove("d-none");

        emailInput.classList.add("d-block");
        emailInput.classList.remove("d-none");

        // Add the "btn-black" class and remove the "btn-green" class from the Sign Up button.
        signUpButton.classList.remove("btn-black");
        signUpButton.querySelector("p").classList.add("text-invert-color");
        signUpButton.classList.add("btn-green");

        // Move the Sign In button above the Sign Up button in the DOM.
        signUpButton.parentNode.insertBefore(signUpButton, signInButton);

    });

});
