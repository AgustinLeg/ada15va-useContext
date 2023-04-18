import { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false)

  const handleDarkTheme = () => {
    setDarkTheme(true)
    document.body.setAttribute('data-theme', 'dark')
  }

  const handleLightTheme = () => {
    setDarkTheme(false)
    document.body.removeAttribute('data-theme')
  }

  return (
    <ThemeContext.Provider
      value={{ darkTheme, handleDarkTheme, handleLightTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
