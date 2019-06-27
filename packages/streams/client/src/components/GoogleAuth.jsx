import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

const GoogleAuth = ({ signIn, signOut, isSignedIn }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    return window.gapi.load('auth2', () => {
      window.gapi.auth2
        .init({
          clientId:
            '169249711188-l5ojsb7mp6o0n4hap0fdg506smvuvjup.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          setAuth(window.gapi.auth2.getAuthInstance());
        });
    });
  }, []);

  useEffect(() => {
    if (!auth) return;
    onAuthChange(auth.isSignedIn.get());
    auth.isSignedIn.listen(onAuthChange);
  }, [auth]);

  const onAuthChange = (signedIn) => {
    if (signedIn) {
      signIn(auth.currentUser.get().getId());
    } else {
      signOut();
    }
  };

  const renderAuthButton = () => {
    switch (isSignedIn) {
      case false:
        return (
          <button
            className={'ui red google button'}
            onClick={auth ? auth.signIn : false}
          >
            <i className={'google icon'} />
            Sign in with Google
          </button>
        );
      case true:
        return (
          <button
            className={'ui red google button'}
            onClick={auth ? auth.signOut : false}
          >
            <i className={'google icon'} /> Sign out
          </button>
        );
      default:
        return (
          <div className={'ui segment'}>
            <div className={'ui active dimmer'}>
              <div className={'ui loader'} />
            </div>
          </div>
        );
    }
  };

  return renderAuthButton();
};

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn,
});

export default connect(
  mapStateToProps,
  { signOut, signIn },
)(GoogleAuth);
