// Firebase App is always required and must be first
import firebase from 'firebase/app';
import 'firebase/app';
import firebaseui from 'firebaseui';

// Add additional services that you want to use
import 'firebase/database';
import 'firebase/auth';
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
const database = app.database().ref();

// Get a reference to the root of the Database
export const dbMessages = database.child('messages');
export const dbCounter = database.child('counter');

// Set authentication
export const auth = firebase.auth();

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      console.log('CONNECTED');
      return true;
    }
  },
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    }
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>'
};

// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
