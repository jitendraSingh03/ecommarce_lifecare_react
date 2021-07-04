import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAjIk9G6L-QmVVTvq0E6uy6rfAv2ycOROk",
    authDomain: "lifecare24-46123.firebaseapp.com",
    projectId: "lifecare24-46123",
    storageBucket: "lifecare24-46123.appspot.com",
    messagingSenderId: "317580891127",
    appId: "1:317580891127:web:f042bb98b835c13aacd4f2",
    measurementId: "G-607509FLVR"

};

const firebaseApp= firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export { auth,provider };
export default db;


