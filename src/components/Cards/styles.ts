import styled from "styled-components";

export const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 1200px;
  display: grid;
  grid-template-columns: 11% 11% 11% 11% 11% 11% 11% 11% 11%;
`

export const Card = styled.div`
  padding: 20px;
  text-align: center;

  p {
    color: ${({ theme }) => theme.text};
  }
`

export const Tipo = styled.img`
  width: 35px;
  height: 35px;
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover{
    transform: rotateY(180deg);
  }
`

export const Botao = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: none;
  background: none;
  border-radius: 50%;

  img {
    width: 40px;
    height: 40px;
    cursor: pointer;

    transition: transform 0.5s ease-in-out;

    &:hover {
        transform: rotate(360deg);
    }
  }
`
