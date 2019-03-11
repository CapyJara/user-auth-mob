import { auth } from './firebase.js';

const ui = new firebaseui.auth.AuthUI(auth);

ui.start('#auth-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: './',
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
});
