
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    //if user is not logged in return
    if(!userAuth) return;

    //if there is user logged in get snaphot check if there exist such a user in database, if there is
    //return it, if not create a new user in db with userRef.set
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log("error creating user", error.message);
        }
    }
    return userRef;

}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;