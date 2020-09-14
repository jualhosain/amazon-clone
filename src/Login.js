import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from './StateProvider'

import './login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        if (user) {
            history.push('/')
        }
    }, []);

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }


    return (
        <div className='login'>
            <Link to='/'>
                <img
                className='login__logo'
                src="img/login_logo.png"
                alt="amazon"
            />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} />
                    
                    <h5>Password</h5>
                    <input type="password" value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        onClick={signIn} className='login__signIn'
                    >
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to Amazon Fake Clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
                </p>
                <button
                    onClick={register} className='login__register'
                >
                    Create your Amazon Account
                </button>
            </div>

        </div>
    );
}

export default Login;
