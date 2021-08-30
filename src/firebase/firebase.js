import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9IDvKv59P7jbdKuDoF3m61iz0Uws-tUg",
  authDomain: "shopapp-7bf7f.firebaseapp.com",
  projectId: "shopapp-7bf7f",
  storageBucket: "shopapp-7bf7f.appspot.com",
  messagingSenderId: "325404236662",
  appId: "1:325404236662:web:901a72a8dbff86e643b857",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default firebase;
