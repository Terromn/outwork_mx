import { isLoggedIn } from '../auth.js';

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.getElementsByClassName("btn-price");

    // Convert HTMLCollection to an array
    const buttonArray = Array.from(buttons);

    buttonArray.forEach((button) => {
        button.addEventListener("click", async (event) => {
            event.preventDefault();

            const link = button.getAttribute("data-link");
            const isAuthenticated = await isLoggedIn();

            console.log("Button clicked.");
            console.log("Is authenticated:", isAuthenticated);
            console.log("Link:", link);

            if (isAuthenticated) {
                console.log("Redirecting to:", link);
                window.location.href = link;
            } else {
                console.log("You need to be logged in to access this.");
            }
        });
    });
});
