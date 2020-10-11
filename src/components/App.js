import React from 'react';
import '../App.css';
import CatList from './CatList';
// import LoaderIcon from './LoaderIcon';
import Splash from './Splash';


function App() {
  return (
    <div className="App" style={{fontFamily: 'Rock Salt'}}>
      app
      {/* <LoaderIcon /> */}
      <CatList />
      <Splash />
    </div>
  );
}

export default App;
