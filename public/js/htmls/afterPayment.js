import {
    auth,
    db,
    doc,
    getDoc,
    updateDoc,
} from '../firebase.js';

const currentUrl = window.location.href;
const urlParams = new URLSearchParams(currentUrl);
const crds = urlParams.get("crds");

const user = auth.currentUser;

auth.onAuthStateChanged(async (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid);

        console.log("DOMContentLoaded event fired.");

        console.log("starting to add credits...");

        // Get the current document
        const userDocRef = doc(db, "users", uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
            const currentCredits = userDocSnap.data().creditsAvailable || 0; // Get the current credits or default to 0
            const newCredits = currentCredits + parseInt(crds, 10); // Add the credits

            // Update the document with the new credits value
            await updateDoc(userDocRef, {
                creditsAvailable: newCredits,
            });
        }
    } else {
        console.log("User is not authenticated.");
    }
});
