import { useState, useCallback, useEffect } from "react"
import { Pokemon, getPokemonList } from "../../api/pokemon"
import { typeImages } from "../../utils/typeImages"
import { Link } from "react-router-dom"
import { Botao, Card, Div, Tipo } from "./styles"

const mascaraNome = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

interface CardProps {
  reset: boolean
  selecioneTipo: string | null
}

export const Cards = ({ reset, selecioneTipo } : CardProps) => {

  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [offset, setOffset] = useState<number>(0)
  const [hasMore, setHasMore] = useState<boolean>(true)

  const loadMorePokemon = useCallback(async () => {
    if (loading || !hasMore) return

    setLoading(true)
    try {
      const data = await getPokemonList(offset)
      setPokemonList((prevList) => [...prevList, ...data.results])
      setOffset((prevOffset) => prevOffset + data.results.length)
      setHasMore(data.next !== null && offset + data.results.length < 1025) // Condição correta para parar no limite
    } catch (error) {
      console.error("Error fetching Pokemon list:", error)
    } finally {
      setLoading(false)
    }
  }, [offset, loading, hasMore])

  useEffect(() => {
    if (reset) {
      setPokemonList([])
      setOffset(0)
      setHasMore(true)
    }
  }, [reset])

  useEffect(() => {
    if (!reset) {
      loadMorePokemon()
    }
  }, [reset, loadMorePokemon])

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight
    if (bottom && !loading) {
      loadMorePokemon()
    }
  }

  const filtrarLista = selecioneTipo ? pokemonList.filter((pokemon) =>
    pokemon.types?.includes(selecioneTipo)) : pokemonList

  return(
    <>
      <Div onScroll={handleScroll}>
        {filtrarLista.map((pokemon) =>(
          <Card key={pokemon.id}>
            {pokemon.sprite ? ( <img src={pokemon.sprite} alt={pokemon.name} /> ) : ( <span>No Image</span> )}
            <p><strong># {pokemon.id}</strong></p>
            <p><strong>{mascaraNome(pokemon.name)}</strong></p>
            {pokemon.types?.map((type) => (
              <Tipo key={type} src={typeImages[type]} alt={mascaraNome(type)} title={mascaraNome(type)}/>
            ))}
            <Botao>
              <Link to={'/pokemon/' + (pokemon.id)}>
                <img title={'Capturar'} src="../../../public/images/capturar.png" alt="Capturar"/>
              </Link>
            </Botao>
          </Card>
        ))}
        {loading && <p style={{textAlign: 'center'}}>Loading...</p>}
      </Div>
    </>
  )
}

export default Cards
