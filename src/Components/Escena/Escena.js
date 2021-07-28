import React, {useState} from "react";
import {RoundText, BigButton} from "./StyledEscena";

const Escena = ({data}) => {
  const [num, setNum] = useState(1);
  const EscenasData = data.map((escena) =>
    <RoundText coloredNum={num} key={data.indexOf(escena)}>{escena}</RoundText>
  );
  const ButtonAnterior = ()=> setNum(num - 1);
  const ButtonSeguent = ()=> setNum(num + 1);

  return (
    <div>
        <BigButton onClick={ButtonAnterior} disabled={num<=1}>Anterior</BigButton>
        <BigButton onClick={ButtonSeguent} disabled={num>=data.length}>Següent</BigButton>
        {EscenasData}
    </div>
  );
};

export default Escena;
