import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBGG7p8YHoAKWBEvT7H19pr3-lkQP5mGOQ",
    authDomain: "clone-25638.firebaseapp.com",
    projectId: "clone-25638",
    storageBucket: "clone-25638.appspot.com",
    messagingSenderId: "138948650750",
    appId: "1:138948650750:web:8dde2e93ced434c27327af",
    measurementId: "G-P9B8G14L2C"
  });

  const db=firebase.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export{db,provider,auth}
  