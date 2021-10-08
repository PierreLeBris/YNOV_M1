import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Counter from './components/counter'
import Todos from './components/todolist'
import Harrypotter from './components/harrypotter'

function App() {
  return (
    <div className="App">
      <Harrypotter api="https://hp-api.herokuapp.com/api/characters"/>
    </div>
  );
}

export default App;

//<Todos></Todos>
//<Counter></Counter>
//<Header label="Vive La France"/>
//<Header></Header>