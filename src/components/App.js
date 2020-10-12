import React from 'react';
import styled from 'styled-components';
import '../App.css';
import CatList from './CatList';
import Splash from './Splash';

const MainApp = styled.div `
  font-family: Rock Salt !important;
`


function App() {
  return (
    <MainApp className="App" style={{fontFamily: 'Rock Salt !important'}}>
      <CatList /> 
      <Splash />
    </MainApp>
  );
}

export default App;
