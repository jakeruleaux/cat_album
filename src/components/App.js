import React from 'react';
import '../App.css';
import CatList from './CatList';
import Splash from './Splash';


function App() {
  return (
    <div className="App" style={{fontFamily: 'Rock Salt !important'}}>
      <CatList /> 
      <Splash />
    </div>
  );
}

export default App;
