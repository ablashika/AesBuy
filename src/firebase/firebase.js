
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth';
import { addDoc, collection,getDoc,doc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD42TcYKuVX_KPqmEKYycxreQD-qtQsWmI",
  authDomain: "formapp-4d22c.firebaseapp.com",
  projectId: "formapp-4d22c",
  storageBucket: "formapp-4d22c.appspot.com",
  messagingSenderId: "1086377100670",
  appId: "1:1086377100670:web:80d75e16b7854991c61f2f"
  
};



// Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }


// Initialize Firebase
// if (firebase.app.length) {
  // 
// } else {
//   ; // if already initialized, use that one
// }

// firebase.app()

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
console.log(db,"ddd")
const auth = firebase.auth();

export { db, auth, firebaseApp, addDoc, collection, getDoc,doc };;