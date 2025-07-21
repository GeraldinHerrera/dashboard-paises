
import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () =>{
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
