import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAM_E66E1PNyVGXH5axLH6cBgbkPFCZxXU",
  authDomain: "todoapp-e7506.firebaseapp.com",
  databaseURL: "https://todoapp-e7506.firebaseio.com",
  projectId: "todoapp-e7506",
  storageBucket: "todoapp-e7506.appspot.com",
  messagingSenderId: "625404710503",
  appId: "1:625404710503:web:14df107b78adace53d8ec2",
});

export { firebaseConfig as firebase };
