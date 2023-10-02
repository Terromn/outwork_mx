import { isLoggedIn, logoutUser } from '../auth.js';

AOS.init({
  duration: 1200,
})


const buttons = document.getElementsByClassName("btn-price");
const btnLogText = document.getElementById("btn-log-text");
const btnLog = document.getElementById("btn-log");

const buttonArray = Array.from(buttons);

const updateLoginButtonText = () => {
    isLoggedIn().then((loggedIn) => {
        if (loggedIn) {
            btnLogText.textContent = "LOGOUT";
        } else {
            btnLogText.textContent = "LOGIN";
        }
    });
};


document.addEventListener("DOMContentLoaded", function () {

    updateLoginButtonText();

    btnLog.addEventListener("click", async (event) => {
        event.preventDefault();

        const link = btnLog.getAttribute("data-link");
        const isAuthenticated = await isLoggedIn();

        if (isAuthenticated) {
            btnLogText.textContent = "LOGIN";

            logoutUser()
                .then(() => {
                    console.log("User has been logged out.");
                })
                .catch((error) => {
                    console.error("Error logging out:", error);
                });
        } else {
            console.log("Redirecting to:", link);
            btnLogText.textContent = "LOGOUT";
            window.location.href = link;
        }
    });


    buttonArray.forEach((button) => {
        button.addEventListener("click", async (event) => {
            event.preventDefault();

            const link = button.getAttribute("data-link");
            const isAuthenticated = await isLoggedIn();

            if (isAuthenticated) {
                console.log("Redirecting to:", link);
                window.location.href = link;
            } else {
                alert("Porfavor Acceda a su cuenta antes de hacer algun pago.");
            }
        });
    });

});

