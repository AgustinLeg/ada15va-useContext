import { useContext } from 'react'
import './App.css'
import { Hijo } from './components/Hijo'
import { UserContext } from './context/UserContext'
import { ThemeSelect } from './components/ThemeSelect'

// si empieza con use es un ... Hook
/**
El Hook useContext en React es como una varita mágica que te permite compartir cosas importantes con todos tus amigos sin tener que decirles a cada uno por separado. Es muy útil cuando necesitas compartir información con muchos amigos al mismo tiempo.
 */

function App() {
  const { handleLogin } = useContext(UserContext)

  return (
    <div className="">
      <ThemeSelect />
      <h1>Clase 05 - Modulo 2 - useContext</h1>
      <button onClick={handleLogin}>Iniciar Sesion</button>
      <Hijo />
    </div>
  )
}

export default App
