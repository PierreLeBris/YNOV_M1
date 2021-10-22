import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
  
  import Login from '../screens/login'
  import Home from '../screens/home'
import Navigation from "../components/navigation";
import { useState } from "react";


  const Routes = () => {
      return(
          <Router>
              {/* <Navigation/> */}
              <Switch>
                  <Route exact path="/">
                      <Login></Login>
                  </Route>
                  <Route path="/home">
                      <Home></Home>
                  </Route>
                  <Redirect  to="/"></Redirect>
              </Switch>
          </Router>
      )
  }

  export default Routes