import React, { useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import firebase from '../../Helpers/firebase';
import './App.css';

import Clientes from '../Clientes/Clientes';
import Productos from '../Productos/Productos';

const App = (props) => {

  useEffect(() => {
    console.log('corrió')
    if(!props.user){
      props.history.push('/login');
    }
  },[props.user, props.history]);

  return (
    <div className='App'>
      <header className='App-header'>
        <nav>
          <Link to='/clientes'>Clientes</Link>
          <br/>
          <Link to='/'>Productos</Link>
        </nav>
        <Switch>
          <Route path="/clientes" render={() => <Clientes user={props.user} />}/>
          <Route path="/" exact render={() => <Productos />}/>
        </Switch>
        
        <button onClick={() => firebase.auth().signOut()}>
          Logout
        </button>
      </header>
    </div>
  );
}

export default withRouter(App);
