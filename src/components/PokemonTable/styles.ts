import styled from "styled-components";

export const Tabela = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
  width: 80%;

  td {
    border: 1px solid #000;
    padding: 8px;
    color: ${({ theme }) => theme.text};
  }
`

export const Th = styled.th`
  border: 1px solid #000;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #C40C0C;
  color: ${({ theme }) => theme.link};
`

export const Tipo = styled.img`
  width: 35px;
  height: 35px;
  display: block;
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
