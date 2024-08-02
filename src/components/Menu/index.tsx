import { MdOutlinePersonPinCircle } from "react-icons/md"
import { IconItem, IconItemTema, IconList, Logo, Nav, NavItem, NavList } from "./styles"
import { CgPokemon } from "react-icons/cg"
import { FaMoon, FaSun } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { useTheme } from "../../contexts/ThemeContext"
import Pesquisar from "../Pesquisar"

export const Menu = () => {

  const navigate = useNavigate()
  const { modoEscuro, trocaTema } = useTheme()

  const pokemonAleatorio = () => {
    const randomId = Math.floor(Math.random() * 1015) + 1
    navigate(`/pokemon/${randomId}`)
  };

  return(
    <Nav>
      <div>
        <Link to={'/'}>
          <Logo src="../../../public/images/logo.png" alt="Logo" />
        </Link>
      </div>
      <NavList>
        <NavItem>
            <a onClick={pokemonAleatorio} title="Pokémon Aleatório"><CgPokemon size={25}/> Pokémon</a>
        </NavItem>
      </NavList>
      <div>
        <Pesquisar />
      </div>
      <div>
        <IconList>
          <IconItemTema>
            <a onClick={trocaTema} title="Mudar tema">
              {modoEscuro ? <FaSun size={30}/> : <FaMoon size={30}/>}
            </a>
          </IconItemTema>
          <Link to={'/meuTime'}>
            <IconItem>
                <a><MdOutlinePersonPinCircle size={30}/></a>
            </IconItem>
          </Link>
        </IconList>
      </div>
    </Nav>
  );
}

export default Menu;
