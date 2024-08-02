import styled from "styled-components";

export const Div = styled.div`
  border-bottom: 1px solid #ccc;
  width: 1200px;
  margin-left: 80px;
`

export const Filtro = styled.button<{ isActive: boolean }>`
  border: 0;
  color: ${({ isActive }) => (isActive ? '#ffcc00' : ({ theme }) => theme.link)};
  background-color: #0F67B1;
  padding: 10px;
  border-radius: ${({ isActive }) => (isActive ? '10px 0 0 10px' : '10px')};
  margin-bottom: 10px;
  cursor: pointer;
  position: absolute;

  &:hover {
    color: #ffcc00;
  }
`

export const Limpar = styled.button`
  border: 0;
  color: ${({ theme }) => theme.link};
  background-color: #0F67B1;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-left: 40px;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  position: absolute;

  &:hover {
    color: #ffcc00;
  }
`

export const Grid = styled.button<{ isActive: boolean }>`
  border: 0;
  color: ${({ isActive }) => (isActive ? '#ffcc00' : ({ theme }) => theme.link)};
  background-color: #0F67B1;
  padding: 10px;
  border-radius: 10px 0 0 10px;
  margin-bottom: 10px;
  border-right: 1px solid ${({ theme }) => theme.link};
  cursor: pointer;

  &:hover {
    color: #ffcc00;
  }
`
export const Table = styled.button<{ isActive: boolean }>`
  border: 0;
  color: ${({ isActive }) => (isActive ? '#ffcc00' : ({ theme }) => theme.link)};
  background-color: #0F67B1;
  padding: 10px;
  border-radius: 0 10px 10px 0;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    color: #ffcc00;
  }
`

export const Imagem = styled.img`
  cursor: pointer;
  width: 100px;
  height: 100px;
`
