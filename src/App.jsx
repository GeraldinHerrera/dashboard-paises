import { useEffect, useState } from "react";

import './App.css'
import { ThemeProvider } from "./Context/ThemeContext";
import ThemeToggleButton from "./Components/ThemeToggleButton";
import CountriesProvider from "./Context";
import GeneralDashboard from "./Pages/GeneralDashboard";

function App() {

  return (
    <>
     <div className="Layout">
        <ThemeProvider>
              <ThemeToggleButton/>  
          </ThemeProvider> 
     </div>

     <div>
       <CountriesProvider>
          <GeneralDashboard/>
       </CountriesProvider>
     </div>


    </>
  )
}

export default App
