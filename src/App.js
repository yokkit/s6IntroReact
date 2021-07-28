import React from 'react'
import Escena from './Components/Escena/Escena';
import data from './Components/data/data.json';


function App() {
  return (
    <Escena data={data}/>
  );
}

export default App;
