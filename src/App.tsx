import { ThemeProvider } from './contexts/ThemeContext'
import { Rotas } from './routes'
import { GlobalStyle } from './styles/global'

function App() {

  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Rotas />
      </ThemeProvider>
    </>
  )
}

export default App
