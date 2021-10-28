import React from 'react';
import logo2 from '../HighSide-anim-logo_@2x.gif'
import image1 from '../daytona.jpg'
//import Like from '../components/like';
import { Provider, UpdownButton } from "@lyket/react";

import '../App.css';

import { LoremIpsum } from 'react-lorem-ipsum';

const Moto1 = props => {
  return (
    <div className="App-moto1">
    <img src={logo2}/>
      <header className="App-header-moto1">
        <p/>
      </header>
      <img className="imgmoto" src={image1}/>
      <div className="text-wrapper">
        <LoremIpsum p={1} />
        <img className="imgmoto" src={image1}/>
        <LoremIpsum p={1} />
        {/*<Like></Like>*/}
        <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
          <UpdownButton
          namespace="my-documentation"
          id="like-dislike-buttons-api"
          />
        </Provider>
      </div>
      <p></p>
    <img src={logo2}/>
    </div>
  );
}

export default Moto1;