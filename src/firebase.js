import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAETOStF63SsTWkLS8fIutKGLCit8tsVK4",
    authDomain: "instagram-clone-e85eb.firebaseapp.com",
    databaseURL: "https://instagram-clone-e85eb.firebaseio.com",
    projectId: "instagram-clone-e85eb",
    storageBucket: "instagram-clone-e85eb.appspot.com",
    messagingSenderId: "808294729243",
    appId: "1:808294729243:web:e3d2764bfacd9be5d1dabe",
    measurementId: "G-X1P5B2NV53"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;