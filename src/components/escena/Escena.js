import React from "react";
import data from "../data/data.json";
import { RoundText } from "./StyledEscena";

const Escena = () => {
  const EscenasData = data.map((escena) => <RoundText>{escena}</RoundText>);
  return <div>{EscenasData}</div>;
};

export default Escena;
