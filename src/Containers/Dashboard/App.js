import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../../Helpers/firebase';
import logo from './logo.svg';
import './App.css';

const App = (props) => {
  useEffect(() => {
    if(!props.user){
      props.history.push('/login');
    }
  },[props.user, props.history]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => firebase.auth().signOut()}>
          Logout
        </button>
      </header>
    </div>
  );
}

export default withRouter(App);
