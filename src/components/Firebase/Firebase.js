import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDrTxHRAfTAQKdbMJua3YN0Tc5SgP-LyD4",
    authDomain: "rgukeymanager.firebaseapp.com",
    databaseURL: "https://rgukeymanager.firebaseio.com",
    projectId: "rgukeymanager",
    storageBucket: "rgukeymanager.appspot.com",
    messagingSenderId: "469482140407"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export default firebase;
