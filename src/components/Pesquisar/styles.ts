import { styled } from "styled-components";

export const Formulario = styled.form`
  position: relative;
  display: flex;
  align-items: center;

  input {
    padding: 5px;
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 20px 0 0 20px;
    outline: none;
    width: 400px;
    height: 50px;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
  }

  button {
    height: 50px;
    padding: 5px 10px;
    border: none;
    border-radius: 0 20px 20px 0;
    background-color: #0F67B1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.link};

    &:hover {
      color: #ffcc00;
    }
  }

  ul {
    position: absolute;
    top: 100%;
    left: 0;
    width: 400px;
    background-color: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 5px;
    list-style: none;
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.text};
  }

  li {
    padding: 0.5rem;
    cursor: pointer;
    border-bottom: 1px solid ${({ theme }) => theme.border};

    &:hover {
      background-color: ${({ theme }) => theme.link};
      color: #ffcc00;
    }
  }

  img {
    display: flex;
    right: 0;
  }
`;
