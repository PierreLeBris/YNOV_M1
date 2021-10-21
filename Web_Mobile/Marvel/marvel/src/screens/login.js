import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/loginForm';
import logo from '../imgmarvel.jpeg'

const Login = props => {
console.log("🚀 ~ file: login.js ~ line 5 ~ props", props)
    return (
        <div>
            <img src={logo}/>
            <p>Login</p>
            <LoginForm></LoginForm>
        </div>
    );
};

Login.propTypes = {
    
};

export default Login;