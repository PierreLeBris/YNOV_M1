import React from 'react';
import logo from './logo.svg';
import logo2 from './HighSide-anim-logo_@2x.gif'
import './App.css';
import SearchBar from './components/search';
import Slide from './components/slide';


function App() {
  return (
    <div className="App">
    <img src={logo2}/>
      <header className="App-header">
      <SearchBar></SearchBar>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Slide></Slide>
      </header>
    </div>
  );
}

export default App;
