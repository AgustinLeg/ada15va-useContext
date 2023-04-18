import { useThemeContext } from '../context/ThemeContext'

export const ThemeSelect = () => {
  const { darkTheme, handleDarkTheme, handleLightTheme } = useThemeContext()

  console.log(darkTheme)

  return (
    <select
      name="theme"
      onChange={(e) => {
        if (e.target.value === 'dark') {
          handleDarkTheme()
        } else {
          handleLightTheme()
        }
      }}
    >
      <option value="dark">Oscuro</option>
      <option value="light">Claro</option>
    </select>
  )
}
