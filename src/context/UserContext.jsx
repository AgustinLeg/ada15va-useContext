import { createContext, useState } from 'react'

// Crear y Exportar el context
export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const handleLogin = () => {
    setUser({
      name: 'Agustin',
      email: 'agus@tin.com',
    })
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  )
}
