import styled, { createGlobalStyle } from "styled-components";
 
export const GlobalStyle = createGlobalStyle`
 body{
  // background:url("/static/images/${(props) => props.coloredNum}.jpg") no-repeat;
  background:url("${(props) => props.imageURL}") no-repeat;
 
    @media(min-width:960px){
      background-size:100%;
    }
    @media(max-width:960px){
      height: 100vh;
    }
  }
`;

export const RoundText = styled.p`
  border: black solid 2px;
  border-radius: 25px;
  padding: 1rem;
  margin: 1% 3%;
  text-align: center;
  text-size: 1rem;
  &:nth-of-type(${(props) => props.coloredNum}) {
    background-color: pink;
    font-size: 1.5rem;
  }
`;

export const BigButton = styled.button`
  width: 50%;
  padding: 20px;
`;
