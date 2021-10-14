import firebase from "firebase/compat/app";

import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyBY5Rtbj5r5qVU6S8XrzJfJH0-HX7gk-qg",
    authDomain: "treelha.firebaseapp.com",
    projectId: "treelha",
    databaseURL: "https://treelha-default-rtdb.firebaseio.com",
    storageBucket: "treelha.appspot.com",
    messagingSenderId: "956720845117",
    appId: "1:956720845117:web:3ba095dbdf7aba0c787554"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }