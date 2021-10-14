import React from 'react';
import PropTypes from 'prop-types';

export default function Login() {
    return(
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }

Login.propTypes = {
    
};

//export default Login;