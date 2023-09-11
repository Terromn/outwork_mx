document.addEventListener("DOMContentLoaded", function () {


    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('checkout_session_id');

    const stripeKey = Stripe('pk_test_51NoaOoBdpz1dvuej41NlgXot6L4DSOqfz0VXoyNy1XGX692w7yFtIftQ5Cn5hP3zokqzZr2ZdT6koww0ZqVprtW200Hukpti8i');

    stripeKey.checkout.sessions.retrieve(sessionId)
        .then(function (session) {
            if (session.payment_status === 'paid') {
                console.log('Payment was successful');
            } else {
                console.log('Payment was not successful');
            }
        })
        .catch(function (error) {
            console.error('Error fetching session:', error);
        });

});
