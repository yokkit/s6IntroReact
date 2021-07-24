import React from 'react';
import data from '../data/data.json';

const Escena = () =>{
    const EscenasData = data.map(escena=><p>{escena}</p>);
    return (
        <div>
            {EscenasData}
        </div>
    )
}

export default Escena;
