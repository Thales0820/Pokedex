import styled from "styled-components";

export const DivPokemon = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 1000px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 20px;
  display: grid;
  grid-template-columns: 50% 50%;
`

export const DivImagem = styled.div`
  display: flex;
  position: relative;
  text-align: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const Shiny = styled.button`
  border: none;
  border-radius: 0 0 0 15px;
  background-color: #0F67B1;
  padding: 5px;
  color: ${({ theme }) => theme.link};
  cursor: pointer;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
`

export const DivInformacoes = styled.div`
  padding: 25px;
  border-left: 1px solid ${({ theme }) => theme.text};

  h1 {
    text-align: center;
    margin-bottom: 25px;
    margin-top: -15px;
    color: ${({ theme }) => theme.text};
  }

  p {
    text-align: start;
    font-size: 20px;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};
  }

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover{
      transform: rotateY(180deg);
    }
  }
`

export const Status = styled.div`
  border-radius: 20%;
  border: 1px solid ${({ theme }) => theme.text};
  margin: auto;
  width: 70%;
  text-align: center;

  h2 {
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text};
  }

  p {
    text-align: center;
    margin-bottom: 1px;
  }
`
