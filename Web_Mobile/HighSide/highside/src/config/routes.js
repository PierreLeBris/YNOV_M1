import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

import Home from '../screens/home'
import Moto1 from "../screens/moto1";

const Routes = () => {
    return(
        <Router>
            {/* <Navigation/> */}
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Routes path="/moto1">
                    <Moto1></Moto1>
                </Routes>
                <Redirect  to="/"></Redirect>
            </Switch>
        </Router>
    )
}

export default Routes