import styled from "styled-components";

export const Botao = styled.button`
  border: none;
  background-color: #0F67B1;
  padding: 5px;
  border-radius: 15px 15px 0 0;
  color: ${({ theme }) => theme.link};
  cursor: pointer;
  display: flex;
  position: absolute;
  bottom: 0;

  &:hover{
    color: #ffcc00;
  }
`
