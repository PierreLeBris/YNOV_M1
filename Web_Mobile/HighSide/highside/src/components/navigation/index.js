import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = props => {
    return (
        <nav>
              <Link to="/"> -Home- </Link>
              <Link to="/moto1"> -Daytona- </Link>
              <Link to="/moto2"> -MT 07- </Link>
              <Link to="/moto3"> -Streetfighter- </Link>

              <p>
              </p>
        </nav>
    );
};

Navigation.propTypes = {
    
};

export default Navigation;