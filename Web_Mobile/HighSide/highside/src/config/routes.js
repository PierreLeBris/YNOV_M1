import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

import Navigation from "../components/navigation";
import Home from '../screens/home'
import Moto1 from '../screens/moto1'
import Moto2 from '../screens/moto2'
import Moto3 from '../screens/moto3'


const Routes = () => {
    return(
        <Router>
            <Navigation/>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/moto1">
                    <Moto1></Moto1>
                </Route>
                <Route path="/moto2">
                    <Moto2></Moto2>
                </Route>
                <Route path="/moto3">
                    <Moto3></Moto3>
                </Route>
                <Redirect  to="/"></Redirect>
            </Switch>
        </Router>
    )
}

export default Routes