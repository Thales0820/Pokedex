import { styled } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  background-color: #C40C0C;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`

export const Logo = styled.img`
  width: 300px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0;
  padding: 0;
`

export const NavItem = styled.li`

  a {
    color: ${({ theme }) => theme.link};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 18px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      color: #ffcc00;
    }
  }
`

export const IconList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 0;
  padding: 0;
`

export const IconItem = styled.li`
  a {
    color: ${({ theme }) => theme.link};
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      color: #ffcc00;
    }
  }
`

export const IconItemTema = styled.li`
  a {
    color: ${({ theme }) => theme.link};
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.hover};
    }
  }
`
