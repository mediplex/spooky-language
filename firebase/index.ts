import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

export const firebaseApp =
  firebase.apps[0] ||
  firebase.initializeApp({
    apiKey: 'AIzaSyBm1-CDGGrqdL_R8GPBs_6FeC3a89U2gz0',
    authDomain: 'spooky-languages.firebaseapp.com',
    databaseURL: 'https://spooky-languages.firebaseio.com',
    projectId: 'spooky-languages',
    storageBucket: 'spooky-languages.appspot.com',
    messagingSenderId: '888975973369',
    appId: '1:888975973369:web:b6b551b7b72939373dfb28',
    measurementId: 'G-74G4JPBD47'
  });

export const firestore = firebaseApp.firestore();
export const auth = firebaseApp.auth();

export default firebase;
