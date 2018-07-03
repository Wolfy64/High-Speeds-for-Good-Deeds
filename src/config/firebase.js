// Firebase App is always required and must be first
import firebase from 'firebase/app';
import 'firebase/app';
// To generate uuid;
import uuidv1 from 'uuid/v1';

// Add additional services that you want to use
import 'firebase/database';
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/messaging';
// import 'firebase/functions';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyChmXT1VvSbFF-VF97Icx6Rn3bIxaW0dkY',
  authDomain: 'ironmanon-react.firebaseapp.com',
  databaseURL: 'https://ironmanon-react.firebaseio.com',
  projectId: 'ironmanon-react',
  storageBucket: 'ironmanon-react.appspot.com',
  messagingSenderId: '164057447379'
};

// Initialize the default app
const app = firebase.initializeApp(config);

// Get a reference to the root of the Database
export const database = app
  .database()
  .ref()
  .child(`messages/${uuidv1()}`);

export const counter = app
  .database()
  .ref()
  .child('counter');
