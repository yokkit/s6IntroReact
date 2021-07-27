import React from 'react'
import Escena from './components/Escena/Escena';
import data from './components/data/data.json';


function App() {
  return (
    <Escena data={data}/>
  );
}

export default App;
