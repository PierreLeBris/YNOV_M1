import React from 'react';
import logo from '../HighSide-anim-logo_@2x.gif'
import image from '../streetfighter.jpg'
import Like from '../components/like';

import '../App.css';

import { LoremIpsum } from 'react-lorem-ipsum';

const Moto3 = props => {
  return (
    <div className="App-moto1">
    <img src={logo}/>
      <header className="App-header-moto1">
        <p/>
      </header>
      <img className="imgmoto" src={image}/>
      <div className="text-wrapper">
        <LoremIpsum p={1} />
        <img className="imgmoto" src={image}/>
        <LoremIpsum p={1} />
        <Like></Like>
      </div>
      <p></p>
    <img src={logo}/>
    </div>
  );
}

export default Moto3;