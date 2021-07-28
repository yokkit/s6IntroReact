import styled from "styled-components";

export const RoundText = styled.p`
  border: black solid 2px;
  border-radius: 25px;
  padding: 1rem;
  text-align: center;
  text-size: 1rem;
  &:nth-of-type(${props=>props.coloredNum}){
    background-color: pink;
  }
`;

export const BigButton = styled.button`
  width:50%;
  padding: 20px;
`;

