import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBLsqfrummijh9ulPY8ROyNTYu86Q9peNE",
  authDomain: "platcursosp4.firebaseapp.com",
  projectId: "platcursosp4",
  storageBucket: "platcursosp4.appspot.com",
  messagingSenderId: "245521342106",
  appId: "1:245521342106:web:807d72fee9b15fe36dc923"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();