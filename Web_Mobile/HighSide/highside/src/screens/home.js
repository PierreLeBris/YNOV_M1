import React from 'react';
import logo from '../logo.svg';
import logo2 from '../HighSide-anim-logo_@2x.gif'
import '../App.css';
import SearchBar from '../components/search';
import Slide from '../components/slide';
import Article from '../components/article';


const Home = props => {
  return (
    <div className="App">
    <img src={logo2}/>
      <header className="App-header">
      <SearchBar></SearchBar>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p/>
        <Slide></Slide>
      </header>
      <Article></Article>    
    </div>
  );
}

export default Home