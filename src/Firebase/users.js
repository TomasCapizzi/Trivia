import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
  //OBJETO DE FIREBASE
  apiKey: "AIzaSyAhPh_OTwflDx5_HtUBfCnzywfDlUkJWIE",
  authDomain: "trivia-app-e1044.firebaseapp.com",
  projectId: "trivia-app-e1044",
  storageBucket: "trivia-app-e1044.appspot.com",
  messagingSenderId: "242728573657",
  appId: "1:242728573657:web:6589d13168edd822e5bcc8"
    
};
const app = firebase.initializeApp(firebaseConfig);
export function getFirebase() {
  return app;
}
export const database = firebase.firestore();