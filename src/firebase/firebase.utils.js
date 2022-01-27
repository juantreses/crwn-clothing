import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyCiziZEffGB1JKSmffrmuA_9P5ZcR6-m4o",
    authDomain: "crwn-clothing-8d90b.firebaseapp.com",
    projectId: "crwn-clothing-8d90b",
    storageBucket: "crwn-clothing-8d90b.appspot.com",
    messagingSenderId: "417799907483",
    appId: "1:417799907483:web:85b286198b22ccd6d63e3e",
    measurementId: "G-750V1S95GT"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp: 'select_account'});
export const sigInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;