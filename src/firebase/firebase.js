
// import firebase from "firebase/app"
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9IDvKv59P7jbdKuDoF3m61iz0Uws-tUg",
//   authDomain: "shopapp-7bf7f.firebaseapp.com",
//   projectId: "shopapp-7bf7f",
//   storageBucket: "shopapp-7bf7f.appspot.com",
//   messagingSenderId: "325404236662",
//   appId: "1:325404236662:web:901a72a8dbff86e643b857",
// };
// // Initialize Firebase
// // if (!firebase.app.length) {
// //   firebase.initializeApp(firebaseConfig);
// // } else {
// //   firebase.app(); // if already initialized, use that one
// // }





//   firebase.initializeApp(firebaseConfig);











import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA9IDvKv59P7jbdKuDoF3m61iz0Uws-tUg",
  authDomain: "shopapp-7bf7f.firebaseapp.com",
  projectId: "shopapp-7bf7f",
  storageBucket: "shopapp-7bf7f.appspot.com",
  messagingSenderId: "325404236662",
  appId: "1:325404236662:web:901a72a8dbff86e643b857",
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
// console.log(db)
const auth = firebase.auth;

export { db, auth };;