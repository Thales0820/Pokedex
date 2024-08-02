import  { createContext, useContext, useState, ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

interface ThemeContextType {
  modoEscuro: boolean
  trocaTema: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

const lightModo = {
  background: '#F5F7F8',
  link: '#ffffff',
  border: '#ccc',
  text: '#000000',
  hover: '#000000',
}

const darkModo = {
  background: '#272829',
  link: '#000000',
  border: '#000000',
  text: '#ffffff',
  hover: '#ffffff',
};


export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [modoEscuro, setModoEscuro] = useState<boolean>(false)

  const trocaTema = () => {
    setModoEscuro((prevMode) => !prevMode)
  }

  const tema = modoEscuro ? darkModo : lightModo

  return (
    <ThemeContext.Provider value={{ modoEscuro, trocaTema }}>
      <StyledThemeProvider theme={tema}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
