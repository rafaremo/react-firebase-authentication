// Add all the firebaseConfig data of your project and rename file to firebase.js

import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

firebase.initializeApp(firebaseConfig);

export default firebase;