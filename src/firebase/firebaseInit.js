import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZDDJeuLcv0wkjPU2FhHt2tI4z4lYmVHM",
  authDomain: "blogyt-c9c94.firebaseapp.com",
  projectId: "blogyt-c9c94",
  storageBucket: "blogyt-c9c94.appspot.com",
  messagingSenderId: "1055993676551",
  appId: "1:1055993676551:web:fcd6440f47677c83d57ba2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
