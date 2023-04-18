import { useState } from 'react'
import { UserContext } from '../UserContext'

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
