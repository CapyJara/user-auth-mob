const config = {
    apiKey: 'AIzaSyCAmmIqePd22ElnUSmZUb13g0jdeRz2-k8',
    authDomain: 'user-auth-mob-715e4.firebaseapp.com',
    databaseURL: 'https://user-auth-mob-715e4.firebaseio.com',
    projectId: 'user-auth-mob-715e4'
};
firebase.initializeApp(config);

export const auth = firebase.auth();

