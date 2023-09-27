import {
    auth,

    db,
    doc,
    setDoc,
} from '../firebase.js';

const currentUrl = window.location.href;
const urlParams = new URLSearchParams(currentUrl);
const crds = urlParams.get("crds");

document.addEventListener("DOMContentLoaded", function () {

    console.log("DOMContentLoaded event fired.");

    const uid = auth.currentUser.uid;

    console.log("starting to upload the credits...s");

    setDoc(doc(db, "users", uid), {

        creditsAvailable: crds,
    
    })

});