import React from 'react';
import PropTypes from 'prop-types';
import { Link,useHistory } from 'react-router-dom';
import Article from '../article';

const Navigation = props => {
    const history = useHistory()
    return (
        <nav>
              <Link to="/"> -Home- </Link>
              <Link to="/moto1"> -Daytona- </Link>
              <p>
              </p>
              {/* <p onClick={() => history.push('/')}> HOME </p> */}
              {/* <p onClick={() => history.push('/moto1')}> Daytona </p> */}
        </nav>
    );
};

Navigation.propTypes = {
    
};

export default Navigation;