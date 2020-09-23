import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjFhOx41Utm7emJe3qTK7DYGrZ2JNYX_E",
  authDomain: "loading-data-fa51e.firebaseapp.com",
  databaseURL: "https://loading-data-fa51e.firebaseio.com",
  projectId: "loading-data-fa51e",
  storageBucket: "loading-data-fa51e.appspot.com",
  messagingSenderId: "121686923300",
  appId: "1:121686923300:web:269ccea1c35843fa2e60b1",
  measurementId: "G-T59NENK8WG"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;

