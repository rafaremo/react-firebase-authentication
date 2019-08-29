import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import firebase from './Helpers/firebase';

import Login from './Containers/Login/Login';
import App from './Containers/Dashboard/App';

const Routes = () => {
    const [user, setUser] = useState("hola");

    useEffect(() => {
        const userObserver = firebase.auth().onAuthStateChanged(user => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return function cleanup() {
            userObserver();
        }
    }, []);

    return (
        <Switch>
            <Route path="/login" render={() => <Login user={user} />}/>
            <Route path="/" render={() => <App user={user} />} />
        </Switch>
    )
}

export default Routes;
