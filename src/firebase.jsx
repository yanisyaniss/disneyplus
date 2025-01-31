import firebase from "firebase";

const firebaseConfig = {

  apiKey: "AIzaSyCOjogpb__ts_615ojDekGBNBtskPb78gk",

  authDomain: "disneyplus-99eb6.firebaseapp.com",

  projectId: "disneyplus-99eb6",

  storageBucket: "disneyplus-99eb6.firebasestorage.app",

  messagingSenderId: "1058357248112",

  appId: "1:1058357248112:web:d449c5af422d3d8b6274b5",

  measurementId: "G-3RPK1RFLVG"

};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;