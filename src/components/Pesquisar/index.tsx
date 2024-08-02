import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllPokemonList, Pokemon, searchPokemon } from "../../api/pokemon"
import { Formulario } from "./styles"
import { FaSearch } from "react-icons/fa"
import { useTheme } from "../../contexts/ThemeContext"

export const Pesquisar = () => {
  const { modoEscuro } = useTheme()
  const navigate = useNavigate()
  const [pesquisarQuery, setPequisarQuery] = useState("")
  const [sugestoes, setSugestoes] = useState<Pokemon[]>([])
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState<number>(-1)

  useEffect(() => {
    const buscarPokemonList = async () => {
      try {
        const data = await getAllPokemonList()
        setPokemonList(data)
      } catch (error) {
        console.error("Error em buscar Pokémon na lista: ", error)
      }
    };

    buscarPokemonList()
  }, [])

  useEffect(() => {
    if (pesquisarQuery.length > 0) {
      const filtrarSugestoes = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().startsWith(pesquisarQuery.toLowerCase())
      )
      setSugestoes(filtrarSugestoes)
      setActiveSuggestionIndex(-1)
    } else {
      setSugestoes([])
      setActiveSuggestionIndex(-1)
    }
  }, [pesquisarQuery, pokemonList])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPequisarQuery(e.target.value)
  }

  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const pokemon = await searchPokemon(pesquisarQuery)
      navigate(`/pokemon/${pokemon.id}`)
    } catch (error) {
      console.error("Pokémon não encontrado: ", error)
    }
  }

  const handleSuggestionClick = (name: string) => {
    navigate(`/pokemon/${name}`)
    setPequisarQuery("")
    setSugestoes([])
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (sugestoes.length > 0) {
      if (e.key === "ArrowDown") {
        setActiveSuggestionIndex((prevIndex) => (prevIndex + 1) % sugestoes.length)
      } else if (e.key === "ArrowUp") {
        setActiveSuggestionIndex((prevIndex) => (prevIndex - 1 + sugestoes.length) % sugestoes.length)
      } else if (e.key === "Enter" && activeSuggestionIndex >= 0) {
        navigate(`/pokemon/${sugestoes[activeSuggestionIndex].name}`)
        setPequisarQuery("")
        setSugestoes([])
      }
    }
  }

  return (
    <>
      <Formulario onSubmit={handleSearchSubmit}>
        <input
          type="search"
          placeholder="Encontre seu Pokemon"
          aria-label="Search"
          value={pesquisarQuery}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />
        <button type="submit"><FaSearch size={20} /></button>
        {sugestoes.length > 0 && (
          <ul>
            {sugestoes.map((pokemon, index) => (
              <li key={index} onClick={() => handleSuggestionClick(pokemon.name)}
                  style={{
                    backgroundColor: index === activeSuggestionIndex ? (modoEscuro ? '#000' : '#fff') :  modoEscuro ? '#272829' : '#F5F7F8',
                    color: index === activeSuggestionIndex ? '#ffcc00' : (modoEscuro ? '#fff' : '#000'),
                  }}>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                <img src={pokemon.sprite} alt={pokemon.name} style={{ width: '80px', marginRight: '10px' }} />
              </li>
            ))}
          </ul>
        )}
      </Formulario>
    </>
  );
};

export default Pesquisar;
