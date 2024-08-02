import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Pokemon } from './pages/Pokemon'
import MeuTime from './pages/MeuTime'

export const Rotas = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/pokemon/:id'
          element={<Pokemon />}
        />
        <Route
          path='/meuTime'
          element={<MeuTime />}
        />
      </Routes>
    </BrowserRouter>
  )
}
