import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAfzArOBaeJRImsNLiplQVypN2CHtuzruk",
  authDomain: "clone-2-bd6fa.firebaseapp.com",
  projectId: "clone-2-bd6fa",
  storageBucket: "clone-2-bd6fa.appspot.com",
  messagingSenderId: "1010867952628",
  appId: "1:1010867952628:web:ba6b0feac10ea5ee4ab7a1",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
