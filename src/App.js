import React from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Checkout from './Checkout'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/checkout'>
                    <Checkout />
                </Route>
           </Switch>
        </BrowserRouter>
  );
}

export default App;
