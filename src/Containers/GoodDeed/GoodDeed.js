import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Form } from '../../Components';
import { Typography } from './style';

export default class extends Component {
  state = {
    isConnected: false
  };

  uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: () => false
    },
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
  }

  render() {
    let goodDeed = null;
    if (this.props.location.state) {
      goodDeed = this.props.location.state.goodDeed;
    }

    return (
      <React.Fragment>
        <Typography>
          {(goodDeed && <p>{goodDeed}</p>) || (
            <p>Oops! Something went wrong... ¯\_(o_o)_/¯</p>
          )}
        </Typography>
        {this.state.isConnected ? (
          <React.Fragment>
            <Form
              text={goodDeed || ''}
              goodDeeds={1}
              type="Good Deeds"
              email={firebase.auth().currentUser.email}
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
