import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';

import styled from 'styled-components';

import privateKey from '../secret'

const Home = props => {    
    const [charactersList, setCharacter] = useState([])
    useEffect( () => {
        const publicKey = 'db535897f3ab7638b2faa88a557a45be'
        const Timestamp = new Date().getMilliseconds();
        const generateUrl = 'https://gateway.marvel.com//v1/public/characters'
    })
    return (
        <div>
            <p>Home</p>
        </div>
    );
};



export default Home;