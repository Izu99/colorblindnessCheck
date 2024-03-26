// FirebaseConfig.js
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDp28pD_6L0S-HmEg3OyvgsW3_8zhZkVe0",
    authDomain: "visioease.firebaseapp.com",
    projectId: "visioease",
    storageBucket: "visioease.appspot.com",
    messagingSenderId: "916327378441",
    appId: "1:916327378441:web:3936e5aea3555170d612d8",
    measurementId: "G-NQ5MKWVBXB"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
