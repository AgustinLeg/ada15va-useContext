import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const User = () => {
  const { user, handleLogout } = useContext(UserContext)

  console.log(user)

  if (!user) return null

  return (
    <div>
      <p>{user.name}</p>
      <button onClick={handleLogout}>Cerrar Sesion</button>
    </div>
  )
}
