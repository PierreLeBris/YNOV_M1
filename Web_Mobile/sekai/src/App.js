import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Counter from './components/counter'

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Header label="Vive La France"/>
      <Header></Header>
    </div>
  );
}

export default App;
