import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import md5 from 'md5';
import Pagination from '../Pagination';
import privateKey from '../secret'

const Home = props => { 
    const valueOffset = 20
    const [currentPage, setCurrentPage] = useState(0)
    const [total, setTotal] = useState(0)
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
            apikey: publicKey,
            hash: hash
        }
      }).then(res => {
          console.log("res.data.data.results",res.data.data.results)
          setCharactersList(res.data.data.results)
          setTotal(res.data.data.total)
      }).catch(err => {
          console.log(err)
      })
    }, [currentPage])
    return <div>
        {charactersList.map(character => <p>{character?.name}</p>)}
        <Pagination
        total={total}
        setCurrentPage={setCurrentPage}
        valueOffset={valueOffset}
        ></Pagination>
    </div>
};

export default Home;