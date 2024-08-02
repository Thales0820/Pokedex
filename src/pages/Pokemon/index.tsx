import { FaRegStar } from "react-icons/fa"
import Menu from "../../components/Menu"
import { DivImagem, DivInformacoes, DivPokemon, Shiny, Status } from "./styles"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getPokemonDetail, PokemonDetail } from "../../api/pokemon"
import { typeImages } from "../../utils/typeImages"
import { useTheme } from "../../contexts/ThemeContext"
import Capturar from "../../components/Capturar"

export const Pokemon = () => {

  const mascaraNome = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const { id } = useParams<{id: string}>()
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null)
  const [loading, setloading] = useState<boolean>(true)
  const [shiny, setShiny] = useState<boolean>(false)
  const {modoEscuro} = useTheme()

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const data = await getPokemonDetail(id!)
        setPokemon(data)
      } catch (error) {
        console.log("Erro ao buscar detalhe: ", error)
      } finally {
        setloading(false)
      }
    }

    fetchPokemonDetail()
  }, [id])

  if (loading) {
    return <p>Loading...</p>
  }

  if (!pokemon) {
    return <p>Pokémon não encontrado</p>
  }

  const toggleShiny = () => {
    setShiny(!shiny)
  }

  const pokemonData = {
    name: pokemon.name,
    url: `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`,
    sprite: pokemon.sprites.front_default,
    types: pokemon.types.map((typeInfo) => typeInfo.type.name)
  }

  return (
    <>
      <Menu />
      <br />
      <h1
        style={{textAlign: 'center', color: modoEscuro ? '#fff' : '#000000'}}
      >Detalhe do Pokemon :</h1>
      <DivPokemon>
        <DivImagem>
          <Shiny onClick={toggleShiny} title="Ver Shiny"
              style={{color: shiny ? '#ffcc00' : modoEscuro ? '#000000' : '#fff'}}>
            <FaRegStar size={30}/>
          </Shiny>
          <img
              style={{objectFit: 'cover', width: '90%', height: 'auto'}}
              src={shiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default}
              alt={mascaraNome(pokemon.name)}
          />
          <Capturar pokemon={pokemonData}/>
        </DivImagem>
        <DivInformacoes>
          <h1>{mascaraNome(pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1))}</h1>
          <p><strong>Tipo: </strong></p>
          {pokemon.types.map((type, index) => (
            <img
              key={index} src={typeImages[type.type.name]}alt={mascaraNome(type.type.name)}
              title={mascaraNome(type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1))}
            />
          ))}
          <p><strong>Número da National Dex: </strong>{pokemon.id}</p>
          <br />
          <Status>
            <h2>Status Básicos:</h2>
            {pokemon.stats.map((stat, index) => (
              <p key={index}>
                <strong>{mascaraNome(stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1))}: </strong>
                {stat.base_stat}
              </p>
            ))}
          </Status>
        </DivInformacoes>
      </DivPokemon>
    </>
  )
}
