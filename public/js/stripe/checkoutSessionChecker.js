document.addEventListener("DOMContentLoaded", async function () {
    console.log('Console Log Working');

    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('checkout_session_id');
    const credits = urlParams.get('crds');
    
});
