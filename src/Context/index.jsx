import { createContext, useState } from "react";

export const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  // Login
  const [user, setUser] = useState({});
  const [allCountries , setAllCountries] = useState(null);
  
  return (
    <CountriesContext.Provider
      value={{
        user,
        setUser,
        allCountries,
        setAllCountries
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
