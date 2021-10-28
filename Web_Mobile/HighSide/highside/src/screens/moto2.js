import React from 'react';
import logo from '../HighSide-anim-logo_@2x.gif'
import image from '../mt07.jpg'
import { Provider, UpdownButton } from "@lyket/react";

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
        <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
          <UpdownButton
          namespace="my-documentation"
          id="like-dislike-buttons-api"
          />
        </Provider>
      </div>
      <p></p>
    <img src={logo}/>
    </div>
  );
}

export default Moto2;