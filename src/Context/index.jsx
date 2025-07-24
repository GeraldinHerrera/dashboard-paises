import { createContext, useState,useEffect } from "react";

export const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  // Login
  const [nameContinents, setNameContinents] = useState("");
  const [allCountries , setAllCountries] = useState([]);

  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(null); 
  useEffect(() => {
    const searchText = search.toLowerCase();
    if(allCountries.length > 0){
      const filtered = allCountries.filter((country) => {
        const name = country.name.toLowerCase();
        const region = country.region.toLowerCase();
        const capital = (country.capital?.[0] || "").toLowerCase();
        const currencies = (country.currencies || "").toLowerCase();
  
        return (
          name.includes(searchText) ||
          region.includes(searchText) ||
          capital.includes(searchText) ||
          currencies.includes(searchText)
        );
      });
  
      setFilteredCountries(filtered);
    }
    
  }, [search, allCountries]);

  return (
    <CountriesContext.Provider
      value={{
        nameContinents,
        setNameContinents,
        allCountries,
        setAllCountries,
        filteredCountries,
        setFilteredCountries,
        search,
        setSearch,
        showModal,
        setShowModal
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
