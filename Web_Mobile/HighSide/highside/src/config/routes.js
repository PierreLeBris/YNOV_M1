import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

import { useState } from "react";

import Navigation from "../components/navigation";
import Home from '../screens/home'
import Moto1 from '../screens/moto1'
import Moto2 from '../screens/moto2'
import Moto3 from '../screens/moto3'
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion"
import styled from 'styled-components'

const Routes = () => {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <Router>
            <GiHamburgerMenu onClick={() => setIsOpen(true)} size={30} color="red"/>
              <Menu initial="close" animate={isOpen ? "open" : "closed"} variants={menuVariants}>
                <p onClick={() => setIsOpen(false)}> CLOSE</p>
                <Navigation/>
            </Menu>
              <Link to="/"> -Home- </Link>
              <Link to="/moto1"> -Daytona- </Link>
              <Link to="/moto2"> -MT 07- </Link>
              <Link to="/moto3"> -Streetfighter- </Link>
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

const menuVariants = {
    open: {x:0, transition: {duration:1}},
    closed: {x:-300,transition: {duration:1}}
  }
  
const Menu = styled(motion.div)`
    width: 300px;
    height:100vh;
    background-color: gray;
    position:fixed;
    top:0;
    z-index: 2;
` 

export default Routes