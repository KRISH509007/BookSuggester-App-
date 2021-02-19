import firebase from "firebase";
require("@firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyAAOijXYFggLD_EltYzi3Dg7f31046kky4",
  authDomain: "suggestbook-e4fb8.firebaseapp.com",
  projectId: "suggestbook-e4fb8",
  storageBucket: "suggestbook-e4fb8.appspot.com",
  messagingSenderId: "915498317374",
  appId: "1:915498317374:web:e07b1ac9392c667902036f"
};  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

 