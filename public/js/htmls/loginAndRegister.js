const signInButton = document.getElementById("signInButton");
const signUpButton = document.getElementById("signUpButton");

const nameInput = document.getElementById("userName");

const emailInput = document.getElementById("userEmail");
const passwordInput = document.getElementById("userPassword");

document.addEventListener("DOMContentLoaded", function () {

    signInButton.addEventListener("click", function () {
        // Add the "btn-green" class and remove the "btn-black" class from the Sign In button.
        const currentAutocompleteValue = passwordField.getAttribute("autocomplete");
        if (currentAutocompleteValue === "new-password") {
            // If it's "new-password," change it to "password"
            passwordInput.setAttribute("autocomplete", "password");
            emailInput.setAttribute("autocomplete", "username");
          }
        signInButton.classList.add("btn-green");
        signInButton.querySelector("p").classList.add("text-invert-color");
        signInButton.classList.remove("btn-black");

        nameInput.classList.add("d-none");
        nameInput.classList.remove("d-block");



        // Add the "btn-black" class and remove the "btn-green" class from the Sign Up button.
        signUpButton.classList.add("btn-black");
        signUpButton.querySelector("p").classList.remove("text-invert-color");
        signUpButton.classList.remove("btn-green");

        // Move the Sign In button above the Sign Up button in the DOM.
        signUpButton.parentNode.insertBefore(signInButton, signUpButton);


    });

    signUpButton.addEventListener("click", function () {
        const currentAutocompleteValue = passwordField.getAttribute("autocomplete");
        if (currentAutocompleteValue === "password") {
            // If it's "new-password," change it to "password"
            passwordField.setAttribute("autocomplete", "new-password");
            emailInput.setAttribute("autocomplete", "new-username");
          }
        // Add the "btn-green" class and remove the "btn-black" class from the Sign In button.
        signInButton.classList.remove("btn-green");
        signInButton.querySelector("p").classList.remove("text-invert-color");
        signInButton.classList.add("btn-black");

        nameInput.classList.add("d-block");
        nameInput.classList.remove("d-none");


        // Add the "btn-black" class and remove the "btn-green" class from the Sign Up button.
        signUpButton.classList.remove("btn-black");
        signUpButton.querySelector("p").classList.add("text-invert-color");
        signUpButton.classList.add("btn-green");

        // Move the Sign In button above the Sign Up button in the DOM.
        signUpButton.parentNode.insertBefore(signUpButton, signInButton);


    });

});
