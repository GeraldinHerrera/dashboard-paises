
import { useTheme } from "../../Context/ThemeContext"

const ThemeToggleButton = () => {
  const { theme, handleChangeTheme  } = useTheme()

  return (
        <div className="fixed bottom-4 right-4 z-50">
            <button 
                onClick={handleChangeTheme}
                className="bg-slate-200 px-4 py-2 rounded dark:bg-slate-950 dark:text-white"
            >
                🌗
            </button>
        </div>
  )
}

export default ThemeToggleButton
