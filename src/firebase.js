import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDtsXy6yhyXwAls5SB1POh9DutjbYzq1ZM",
    authDomain: "clone-5a23f.firebaseapp.com",
    projectId: "clone-5a23f",
    storageBucket: "clone-5a23f.appspot.com",
    messagingSenderId: "1008608930808",
    appId: "1:1008608930808:web:379f795e7ca1390b2d040d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider };