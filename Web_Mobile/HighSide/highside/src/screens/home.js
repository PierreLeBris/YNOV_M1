import React from 'react';
import logo from '../HighSide-anim-logo_@2x.gif'
import '../App.css';
import { Link } from 'react-router-dom';
import SearchBar from '../components/search';
import Slide from '../components/slide';
import Article from '../components/article';


const Home = props => {
  return (
    <div className="App">
      <Link to="/">
        <div>
        <img src={logo}/>
        </div>
      </Link>
      <header className="App-header">
      <SearchBar></SearchBar>
        <p/>
        <Slide></Slide>
        <p></p>
      </header>
      <Article></Article> 
      <Link to="/">
        <img src={logo}/>
      </Link>
    </div>
  );
}

export default Home