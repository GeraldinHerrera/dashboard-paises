// src/components/ThemeToggleButton.jsx
import { useTheme } from "../../Context/ThemeContext"
import { FormControlLabel, Switch } from "@mui/material"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"

const ThemeToggleButton = () => {
  const { theme, handleChangeTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <div className="fixed bottom-4 right-6 z-50 bg-transparent">
      <FormControlLabel
        control={
          <Switch
            checked={isDark}
            onChange={handleChangeTheme}
            color="default"
          />
        }
        label={isDark ? <DarkModeIcon className="text-blue-500" /> : <LightModeIcon className="text-amber-400" />}
        labelPlacement="start"
      />
    </div>
  )
}

export default ThemeToggleButton

