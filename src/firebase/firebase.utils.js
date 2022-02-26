
//import firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAqwwuXUHcJtx30m0or3_MOZxegssefkmY",
    authDomain: "seniordesign-4e38e.firebaseapp.com",
    projectId: "seniordesign-4e38e",
    storageBucket: "seniordesign-4e38e.appspot.com",
    messagingSenderId: "814218009217",
    appId: "1:814218009217:web:cff58ed0ddb32264448b80",
    measurementId: "G-E5LR8C4297"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;