import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDJ4LNUgUHGkbLNVQSzGQcPmRPyrANTybI",
    authDomain: "discord-clone-5bca3.firebaseapp.com",
    projectId: "discord-clone-5bca3",
    storageBucket: "discord-clone-5bca3.appspot.com",
    messagingSenderId: "575088879857",
    appId: "1:575088879857:web:83169d4fe555f2abda2150",
    measurementId: "G-54JZ6293M8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;