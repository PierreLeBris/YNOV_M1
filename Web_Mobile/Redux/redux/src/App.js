import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './config/store';
import Routes from './config/routes';

function App() {
  return (
    <Provider store = {store}> 
      <Routes>
      </Routes>
    </Provider>
  );
}

export default App;
