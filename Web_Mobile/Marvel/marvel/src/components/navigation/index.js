import React from 'react';
import PropTypes from 'prop-types';
import { Link,useHistory } from 'react-router-dom';

const Navigation = props => {
    const history = useHistory()
    return (
        <nav>
              <Link to={"/"}>Acceuil</Link>
              <p></p>
              <Link to="/login">Login</Link>
              <p></p>
              <Link to="/characters">Characters</Link> 
              <p onClick={() => history.push('/login')}> LOGIN HISTORY</p>
              <p onClick={() => history.push('/characters')}> CHARACTERS HISTORY</p>
              <p onClick={() => history.goBack()}> Retour</p>
        </nav>
    );
};

Navigation.propTypes = {
    
};

export default Navigation;
