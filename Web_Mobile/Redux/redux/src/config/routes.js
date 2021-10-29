import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import Counter from '../screens/counter';

const Routes = props => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Counter></Counter>
                </Route>
            </Switch>
        </Router>
    );
};

export default Routes;