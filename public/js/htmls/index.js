import { isLoggedIn, logoutUser } from '../auth.js';


const buttons = document.getElementsByClassName("btn-price");
const btnLogTexts = document.getElementsByClassName("btn-log-text");
const btnLogs = document.getElementsByClassName("btn-log");

const buttonArray = Array.from(buttons);

const btnLogTextsArray = Array.from(btnLogTexts);
const btnLogsArray = Array.from(btnLogs);

const updateLoginButtonText = () => {
    isLoggedIn().then((loggedIn) => {
        if (loggedIn) {
            btnLogTextsArray.forEach((btnLogText) => {
                btnLogText.textContent = "LOGOUT";
            })
        } else {
            btnLogTextsArray.forEach((btnLogText) => {
                btnLogTexts.textContent = "LOGIN";
            })
        }
    });
};


document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('nav-bar');
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    updateLoginButtonText();

    btnLogsArray.forEach((btnLogs) => {
        btnLogs.addEventListener("click", async (event) => {
            event.preventDefault();

            const link = btnLogs.getAttribute("data-link");
            const isAuthenticated = await isLoggedIn();

            if (isAuthenticated) {
                btnLogTexts.textContent = "LOGOUT";

                logoutUser()
                    .then(() => {
                        console.log("User has been logged out.");
                    })
                    .catch((error) => {
                        console.error("Error logging out:", error);
                    });
            } else {
                console.log("Redirecting to:", link);
                btnLogTexts.textContent = "LOGIN";
                window.location.href = link;
            }
        });
    })



    buttonArray.forEach((button) => {
        button.addEventListener("click", async (event) => {
            event.preventDefault();

            const link = button.getAttribute("data-link");
            console.log(link);
            const isAuthenticated = await isLoggedIn();

            if (isAuthenticated) {
                console.log("Redirecting to:", link);
                window.location.href = link;
            } else {
                window.location.href = "https://outwork.mx/html/loginAndRegister.html";

            }
        });
    });

});

