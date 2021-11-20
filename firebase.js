import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import {getFirestore} from 'firebase/firestore'

const app = firebase.initializeApp({
  //dev key
  /*apiKey: "AIzaSyDk-gSI-MKp_a-GUeySVcCZoHJCq22VVgQ",
  authDomain: "simple-gardens-development.firebaseapp.com",
  projectId: "simple-gardens-development",
  storageBucket: "simple-gardens-development.appspot.com",
  messagingSenderId: "197529511305",
  appId: "1:197529511305:web:14c61308ab3a60321ead58"*/

  apiKey: "AIzaSyAJAmder3qA2nTEXgZIY-Wz0tp5lQr2MQg",
  authDomain: "simple-gardens.firebaseapp.com",
  projectId: "simple-gardens",
  storageBucket: "simple-gardens.appspot.com",
  messagingSenderId: "149381021186",
  appId: "1:149381021186:web:a106f46b8c0c8c17baf11b",
  measurementId: "G-C9NZY7R04Q"
})

export const auth = app.auth();
const projectStorage = firebase.storage();
export default getFirestore();
export { projectStorage };