import { useEffect, useState } from "react";
import { Pokemon } from "../../api/pokemon";
import Menu from "../../components/Menu";
import { typeImages } from "../../utils/typeImages";
import { Div, Tipo, Tirar, Titulo } from "./styles";
import { IoMdCloseCircle } from "react-icons/io";

const mascaraNome = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const MeuTime = () => {
  const [team, setTeam] = useState<Pokemon[]>([]);

  useEffect(() => {
    const teamString = localStorage.getItem("meuTimePokemon");
    if (teamString) {
      setTeam(JSON.parse(teamString));
    }
  }, []);

  const removerPokemon = (pokemon: Pokemon) => {
    const confirmacao = window.confirm(`Tem Certeza que Deseja Tirar ${mascaraNome(pokemon.name)} do seu Time!`)

    if (confirmacao) {
      const novoTime = team.filter((p) => p.name !== pokemon.name)
      setTeam(novoTime)
      localStorage.setItem("meuTimePokemon", JSON.stringify(novoTime))
      alert(`${mascaraNome(pokemon.name)} foi Removido do seu Time!`)
    }
  }

  return (
    <>
      <Menu />
      <br />
      <Titulo>Seus Pokémon</Titulo>
        {team.length === 0 ? (
          <p style={{textAlign: 'center', fontSize: '40px'}}>Você ainda não tem pokémom</p>
        ) : (
          <Div>
            {team.map((pokemon) => (
              <div key={pokemon.name}>
                <Tirar title="Tire o Pokémon" onClick={() => removerPokemon(pokemon)}><IoMdCloseCircle size={20}/></Tirar>
                <img src={pokemon.sprite} alt={pokemon.name} />
                <p><strong>{mascaraNome(pokemon.name)}</strong></p>
                {pokemon.types?.map((type) => (
                  <Tipo key={type} src={typeImages[type]} alt={mascaraNome(type)} title={mascaraNome(type)} />
                ))}
              </div>
            ))}
          </Div>
        )}
    </>
  );
};

export default MeuTime;
