import axios from 'axios';

export const API_URL = 'https://pokeapi.co/api/v2'

export interface Pokemon {
  id: number
  name: string
  url: string
  sprite?: string
  types?: string[]
}

export interface PokemonListResponse {
  count: number
  next: string | null
  previous: string | null
  results: Pokemon[]
}

export interface PokemonDetail {
  id: number
  name: string
  sprites: {
    front_default: string
    front_shiny: string
  };
  types: { type: { name: string } }[]
  stats: { base_stat: number; stat: { name: string } }[]
}

const getPokemonDetails = async (url: string) => {
  const response = await axios.get(url)
  return response.data
}

export const getPokemonList = async (offset: number): Promise<PokemonListResponse> => {
  const limit = 1025 // Definindo o limite fixo de 1025
  const response = await axios.get(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`)
  const pokemonList = response.data.results

  const updatedPokemonList = await Promise.all(pokemonList.map(async (pokemon: Pokemon) => {
    const details = await getPokemonDetails(pokemon.url)
    return {
      ...pokemon,
      id: details.id,
      sprite: details.sprites.front_default,
      types: details.types.map((typeInfo: any) => typeInfo.type.name),
    }
  }))

  return {
    ...response.data,
    results: updatedPokemonList,
  }
}

export const getAllPokemonList = async (): Promise<Pokemon[]> => {
  const allPokemon: Pokemon[] = []
  let offset = 0

  while (offset < 1025) {
    const response = await getPokemonList(offset)
    allPokemon.push(...response.results)
    offset += response.results.length
  }

  return allPokemon.slice(0, 1025) // Certifique-se de que estamos apenas retornando 1025 Pokémon
}

export const getPokemonDetail = async (id: string): Promise<PokemonDetail> => {
  const response = await axios.get(`${API_URL}/pokemon/${id}`)
  return response.data
}

export const searchPokemon = async (name: string): Promise<PokemonDetail> => {
  const response = await axios.get(`${API_URL}/pokemon/${name.toLowerCase()}`)
  return response.data
}
