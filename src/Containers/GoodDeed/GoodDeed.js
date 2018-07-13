import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Form } from '../../Components';
import { Typography } from './style';

export default class extends Component {
  state = {
    isConnected: false,
    goodDeed: ''
  };

  uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: () => true
    },
    signInSuccessUrl: '/good-deeds/',
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: ''
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isConnected: !!user });
    });

    if (this.props.location.state) {
      this.setState({ goodDeed: this.props.location.state.goodDeed });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Typography>
          <p>{this.state.goodDeed}</p>
        </Typography>
        {this.state.isConnected ? (
          <React.Fragment>
            <Form
              text={this.state.goodDeed}
              email={firebase.auth().currentUser.email}
              displayName={firebase.auth().currentUser.displayName}
            />
            <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
          </React.Fragment>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </React.Fragment>
    );
  }
}
