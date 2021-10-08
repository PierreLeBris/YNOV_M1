import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Counter from './components/counter'
import Todos from './components/todolist/correction'

function App() {
  return (
    <div className="App">
      <Todos></Todos>

    </div>
  );
}

export default App;

//<Counter></Counter>
//<Header label="Vive La France"/>
//<Header></Header>