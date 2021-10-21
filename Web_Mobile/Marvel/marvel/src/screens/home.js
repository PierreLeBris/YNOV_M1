import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import md5 from 'md5';

import privateKey from '../secret'

const Home = props => {    
    const [charactersList, setCharactersList] = useState([])
    useEffect( () => {
        const publicKey = 'db535897f3ab7638b2faa88a557a45be';
        const timestamp = new Date().getMilliseconds();
        const hash = md5(`${timestamp}${privateKey}${publicKey}`)
        const generateUrl = 'https://gateway.marvel.com/v1/public/characters'

    axios({
        method: 'GET',
        url: generateUrl,
        params: {
            ts: timestamp,
            apiKey: publicKey,
            hash: hash
        }
      }).then(res => {
          console.log("res.data.data.result",res.data.data.result)
          setCharactersList(res.data.data.result)
      }).catch(err => {
          console.log(err)
      })
    }, [])
    return <div>
        {charactersList.map(character => <p>{character.name}</p>)}
    </div>
};

export default Home;