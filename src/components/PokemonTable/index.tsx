import { useEffect, useState, useCallback } from 'react'
import { getPokemonList, Pokemon } from '../../api/pokemon'
import { Botao, Tabela, Th, Tipo } from './styles'
import { typeImages } from '../../utils/typeImages'
import { Link } from 'react-router-dom'

const mascaraNome = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

interface TableProps {
  selecioneTipo: string | null
}

export const PokemonTabela = ({ selecioneTipo } : TableProps) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [offset, setOffset] = useState<number>(0)
  const [hasMore, setHasMore] = useState<boolean>(true)

  const loadMorePokemon = useCallback(async () => {
    if (loading || !hasMore) return

    setLoading(true)
    try {
      const data = await getPokemonList(offset)
      setPokemonList(prevList => [...prevList, ...data.results])
      setOffset(prevOffset => prevOffset + data.results.length)
      setHasMore(data.next !== null && offset + data.results.length < 1015) // Condição correta para parar no limite
    } catch (error) {
      console.error("Error fetching Pokemon list:", error)
    } finally {
      setLoading(false)
    }
  }, [offset, loading, hasMore])

  useEffect(() => {
    loadMorePokemon()
  }, [])

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight
    if (bottom && !loading) {
      loadMorePokemon()
    }
  }

  const filtrarLista = selecioneTipo ? pokemonList.filter((pokemon) =>
    pokemon.types?.includes(selecioneTipo)) : pokemonList

  return (
    <>
    <br />
    <div onScroll={handleScroll}>
      <Tabela>
        <thead>
          <tr>
            <Th>#</Th>
            <Th>Pokémon</Th>
            <Th>Nome</Th>
            <Th>Tipo</Th>
            <Th>Opção</Th>
          </tr>
        </thead>
        <tbody>
          {filtrarLista.map((pokemon) => (
            <tr key={pokemon.id}>
              <td><strong>{pokemon.id}</strong></td>
              <td>
                {pokemon.sprite ? (
                  <img src={pokemon.sprite} alt={pokemon.name} />
                ) : (
                  <span>No Image</span>
                )}
              </td>
              <td><strong>{mascaraNome(pokemon.name)}</strong></td>
              <td>{pokemon.types?.map((type) => (
                <Tipo key={type} src={typeImages[type]} alt={mascaraNome(type)} title={mascaraNome(type)}/>
              ))}</td>
              <td>
                <Botao>
                  <Link to={'/pokemon/' + (pokemon.id)}>
                    <img title={'Capturar'} src="../../../public/images/capturar.png" alt="Capturar"/>
                  </Link>
                </Botao>
              </td>
            </tr>
          ))}
        </tbody>
      </Tabela>
      {loading && <p style={{textAlign: 'center'}}>Loading...</p>}
    </div>
    <br />
    </>
  );
};

export default PokemonTabela;
