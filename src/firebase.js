import firebase from 'firebase';

const firebaseConfig=
{
    apiKey: "AIzaSyC_D8n7dMfBGpsfapBU7kjXn8euO4t9AIQ",
    authDomain: "twitter-clone-befc8.firebaseapp.com",
    projectId: "twitter-clone-befc8",
    storageBucket: "twitter-clone-befc8.appspot.com",
    messagingSenderId: "814829257781",
    appId: "1:814829257781:web:f7bf42070cc042969b9d7c",
    measurementId: "G-8DXRDXGQNH"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
export default db;