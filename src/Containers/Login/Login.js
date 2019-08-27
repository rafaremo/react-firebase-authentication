import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../../Helpers/firebase';
import './Login.css';

const Login = (props) => {
    const [formulario, setFormulario] = useState({
        username: '',
        password: ''
    });

    useEffect(() => {
        if(props.user){
            props.history.push('/');
        }
    }, [props.user, props.history]);

    const onFormChange = (nombre, valor) => { 
        let newState = { ...formulario };

        newState[nombre] = valor;

        setFormulario(newState);
    };

    const onFormSubmit = (eve) => {
        eve.preventDefault();

        // firebase.auth().createUserWithEmailAndPassword(formulario.username, formulario.password)
        //     .then(respuesta => {
        //         console.log(respuesta)
        //     });

        firebase.auth().signInWithEmailAndPassword(formulario.username, formulario.password)
            .then(respuesta => {
                console.log(respuesta);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={onFormSubmit}>
                    <input type="email" placeholder="Correo" required onChange={(eve) => onFormChange('username', eve.target.value)} />
                    <input type="password" placeholder="Contraseña" required onChange={(eve) => onFormChange('password', eve.target.value)} />
                    <button type="submit">Submit</button>
                </form>
            </header>
        </div>
    );
}

export default withRouter(Login);