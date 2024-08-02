import { CgPokemon } from "react-icons/cg"
import { Botao } from "./styles"
import { Pokemon } from "../../api/pokemon"

interface CapturaProps {
  pokemon: Pokemon
}

const mascaraNome = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const MAX_POKEMON_TEAM_SIZE = 6

export const Capturar = ({ pokemon }: CapturaProps) => {

  const adicionar = () => {
    let timePokemon = JSON.parse(localStorage.getItem("meuTimePokemon") || "[]")

    console.log("Time atual antes da verificação:", timePokemon);

    if (timePokemon.length >= MAX_POKEMON_TEAM_SIZE) {
      alert("Você só pode ter 6 Pokémon no seu Time!")
      console.log("Tentativa de adicionar com time cheio:", timePokemon)
      return
    }

    const jaCapturado = timePokemon.some((p: Pokemon) => p.name === pokemon.name)

    if (jaCapturado) {
      alert("Esse Pokémon já esta no seu Time!")
      return
    }

    timePokemon.push(pokemon)
    localStorage.setItem("meuTimePokemon", JSON.stringify(timePokemon))
    console.log("Pokémon adicionado:", pokemon);
    console.log("Time atualizado:", timePokemon);
    alert(`${mascaraNome(pokemon.name)} foi Adicionado ao seu Time!`)
  }

  return(
    <>
      <Botao title="Adicionar ao seu Time" onClick={adicionar}>
          <CgPokemon size={35}/>
      </Botao>
    </>
  )
}

export default Capturar
