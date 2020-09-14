import React,{useEffect} from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase'
import {useStateValue} from './StateProvider'

function App() {
    const [data, dispatch] = useStateValue();
    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            if (user) {

                dispatch({type: 'Set_User', user })
            } else {
                dispatch({ type: 'Set_User', user: null })
            }
        });
    }, []);
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Header />
                    <Home />
                </Route>
                <Route exact path='/checkout'>
                    <Header />
                    <Checkout />
                </Route>
                <Route exact path='/login'>
                    <Login />
                </Route>
           </Switch>
        </BrowserRouter>
  );
}

export default App;
