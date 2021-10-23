import React from 'react';
import logo from '../logo.svg';
import logo2 from '../HighSide-anim-logo_@2x.gif'
import '../App.css';
//import styled from 'styled-component'
import SearchBar from '../components/search';
import Slide from '../components/slide';
import Article from '../components/article';


const Moto1 = props => {
  return (
    <div className="App">
    <img src={logo2}/>
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default Moto1;

/*return (
    <FormContainer>
        <StyledForm onSubmit={onSubmit}>
            <StyledInput value={username} onChange={(e) => setUsername(e.target.value)} name="username" type="text"></StyledInput>
            <StyledInput value={password} name="password" type="password" onChange={(e) => setPassword(e.target.value)}></StyledInput>
            <StyledInput type="submit"></StyledInput>

        </StyledForm>
        
    </FormContainer>
);*/