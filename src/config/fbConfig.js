import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDmq1CvgfH7hZ3ieDZLrETyCRqBT95_BU0",
    authDomain: "net-ninja-marioplan-e27d9.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-e27d9.firebaseio.com",
    projectId: "net-ninja-marioplan-e27d9",
    storageBucket: "",
    messagingSenderId: "609038063782",
    appId: "1:609038063782:web:615a9ba36ec15bc7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;