import styled from "styled-components";
import fundo from "../../../public/images/background.jpg";

export const Titulo = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.text};
`

export const Div = styled.div`
  /* background-image: url(${fundo});
  background-position: 100% 50%; */
  border-radius: 20px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 5px;
  width: 1000px;
  display: grid;
  grid-template-columns: 33% 33% 33%;

  div {
    margin-bottom: 10px;
  }

  p {
    color: ${({ theme }) => theme.text};
  }
`

export const Tirar = styled.button`
  border: none;
  border-radius: 15px;
  background-color: #0F67B1;
  padding: 2px;
  color: ${({ theme }) => theme.link};
  cursor: pointer;
  height: 25px;

  &:hover {
    color: #ffcc00;
  }
`

export const Tipo = styled.img`
  width: 35px;
  height: 35px;
  margin-top: 5px;
  margin-left: 2.5px;
  margin-right: 2.5px;
  cursor: pointer;
`
