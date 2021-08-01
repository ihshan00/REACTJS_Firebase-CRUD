


import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCx4sgkMMi4JxzQhVo3O-mZx-JFp7t7EiA",
  authDomain: "studentmanagement-23faa.firebaseapp.com",
  projectId: "studentmanagement-23faa",
  storageBucket: "studentmanagement-23faa.appspot.com",
  messagingSenderId: "972587538410",
  appId: "1:972587538410:web:ffc42302416767d0ab8493"
};

var app=firebase.initializeApp(firebaseConfig);


export default app;