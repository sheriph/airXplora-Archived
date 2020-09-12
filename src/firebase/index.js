import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDGGN-peyTVhvpiLaro-QE0W4UvSlJFq7I",
  authDomain: "test-ff8cf.firebaseapp.com",
  databaseURL: "https://test-ff8cf.firebaseio.com",
  projectId: "test-ff8cf",
  storageBucket: "test-ff8cf.appspot.com",
  messagingSenderId: "879041691450",
  appId: "1:879041691450:web:c40f6cb59c62ae50db5a03",
  measurementId: "G-ZV5NY7YEDN",
});

let db = firebase.firestore();

export default {
  firebase,
  db,
};
