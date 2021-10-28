import React from 'react';
import logo from '../HighSide-anim-logo_@2x.gif'
import '../App.css';
import SearchBar from '../components/search';
import Slide from '../components/slide';
import Article from '../components/article';


const Home = props => {
  return (
    <div className="App">
    <img src={logo}/>
      <header className="App-header">
      <SearchBar></SearchBar>
        <p/>
        <Slide></Slide>
      </header>
      <Article></Article> 
      <img src={logo}/>   
    </div>
  );
}

export default Home