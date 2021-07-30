import React from "react";
import { WelcomeDiv } from "./StyledWelcome";

const Welcome = ({ startStory }) => {
  return (
    <WelcomeDiv>
      <h1>Welcome!</h1>
      <p>Un client que té com a producte principal una web de gestió empesarial desenvolupada amb React, ens ha demanat que desenvolupem un tutorial, en la qual mitjançant dos botons els nous usuaris puguin avançar i retrocedir en els consells, modificant-se el text d'ajuda i la imatge de fons.</p>
      <button onClick={startStory}>Començem</button>
    </WelcomeDiv>
  );
};

export default Welcome;
