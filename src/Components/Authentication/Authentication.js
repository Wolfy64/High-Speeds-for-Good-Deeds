import React from 'react';
import { Container } from '../index';
import firebase from 'firebase';

export default () => {
  firebase
    .auth()
    .signOut()
    .then(function() {
      // Sign-out successful.
      console.log('Sign-out successful.');
    })
    .catch(function(error) {
      // An error happened.
      console.log('An error happened:', error);
    });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log('Connected:', user);
    } else {
      // No user is signed in.
      console.log('Not Connected:', user);
    }
  });

  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    console.log(name);
    console.log(email);
    console.log(photoUrl);
    console.log(emailVerified);
    console.log(uid);
  }

  return (
    <Container style={{ backgroundColor: 'pink' }}>
      <div id="firebaseui-auth-container" />
    </Container>
  );
};
