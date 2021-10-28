import React from 'react';
import logo from '../HighSide-anim-logo_@2x.gif'
import image from '../mt07.jpg'
import '../App.css';

import { LoremIpsum } from 'react-lorem-ipsum';

const Moto2 = props => {
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
      </div>
    <img src={logo}/>
    </div>
  );
}

export default Moto2;