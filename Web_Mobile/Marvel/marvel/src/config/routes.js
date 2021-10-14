import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from '../screens/login'
import Characters from '../screens/characters'
import Navigation from "../components/navigation";

<img src="../images/imgmarvel.jpeg" alt=""></img>

const Routes = () => {
    return(
        <Router>
            <Navigation/>
            <Switch>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/characters">
                    <Characters></Characters>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;