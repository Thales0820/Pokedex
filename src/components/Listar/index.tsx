import { FaTableList } from "react-icons/fa6"
import { IoGrid } from "react-icons/io5"
import { Div, Filtro, Grid, Imagem, Limpar, Table } from "./styles"
import { useState } from "react"
import PokemonTabela from "../PokemonTable"
import { Cards } from "../Cards"
import Modal from "../Modal"
import { typeImages } from "../../utils/typeImages"
import { useTheme } from "../../contexts/ThemeContext"
import { RiFilterFill, RiFilterOffFill } from "react-icons/ri"

export const Listar = () => {
  const [visualizar, setVisualizar] = useState("grid")
  const [reset, setReset] = useState(false)
  const [filtro, setFiltro] = useState(false)
  const [selecioneTipo, setSelecioneTipo] = useState<string | null>(null)
  const {modoEscuro} = useTheme()

  const handleToggleView = (view: string) => {
    if (visualizar !== view) {
      setVisualizar(view)
      setReset(true)
      setTimeout(() => setReset(false), 0)
    }
  }

  const handleFiltroOpen = () => {
    setFiltro(true)
  }

  const handleFiltroClose = () => {
    setFiltro(false)
  }

  const handleFiltro = (type: string) => {
    setSelecioneTipo(type)
    setFiltro(false)
  }

  const handleLimparFiltro = () => {
    setSelecioneTipo(null)
  }

  return(
    <>
      <Div>
        <Filtro onClick={handleFiltroOpen} isActive={!!selecioneTipo}>
          <RiFilterFill size={18}/>
        </Filtro>
        {selecioneTipo && (
            <Limpar onClick={handleLimparFiltro}><RiFilterOffFill size={18}/></Limpar>
        )}
        <div style={{textAlign: 'end'}}>
          <Grid title={'Ver em Blocos'} onClick={() => handleToggleView("grid")} isActive={visualizar === "grid"}>
            <IoGrid size={18}/>
          </Grid>
          <Table title={'Ver em Tabela'} onClick={() => handleToggleView("table")} isActive={visualizar === "table"}>
            <FaTableList size={18}/>
          </Table>
        </div>
      </Div>
      {visualizar === "grid" ? <Cards reset={reset} selecioneTipo={selecioneTipo}/> : <PokemonTabela selecioneTipo={selecioneTipo}/>}
      <Modal isOpen={filtro} onClose={handleFiltroClose}>
        <h3 style={{color: modoEscuro ? '#fff' : '#000'}}>Selecione o Tipo dos Pokémon</h3>
        <br />
        {Object.keys(typeImages).map(type => (
          <Imagem key={type} title={type} onClick={() => handleFiltro(type)} src={typeImages[type]} alt={type} />
        ))}
      </Modal>
    </>
  )
}

export default Listar
