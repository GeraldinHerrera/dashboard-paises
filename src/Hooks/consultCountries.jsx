import { useEffect,useContext } from 'react';
import { ENDPOINTS } from "../EndPoints/urlPoint";
import { CountriesContext } from "../Context/index";


export const  ConsultCountries = () => {
    const context = useContext(CountriesContext);
    const sendConsultCountries = async () => {
        try{  
            const response = await fetch (ENDPOINTS.consultAllCountries,{
                method:"GET",
                headers: { "Content-Type": "application/json" },
            })
            const data = await response.json();

            const updatedCountries = data.map((country) => {
                const currencyKeys = country.currencies ? Object.keys(country.currencies) : [];
                const firstCurrency = currencyKeys.length > 0 ? country.currencies[currencyKeys[0]] : null;
              
                return {
                  capital: country.capital,
                  currencies: firstCurrency?.name || "Desconocida",
                  icon: country.flags.png,
                  name: country.name.common,
                  population: country.population,
                  region: country.region,
                };

                
              });
            context.setAllCountries(updatedCountries);
            return data;

        }catch (error){
            console.error("Error ", error.message);
            alert("Login Errir:" + error.message);
        }
    }

    // function format(objeto) {
    //     debugger
    //     // const nombre = Object.keys(objeto);
    //     // const nombre1 = objeto(nombre);

    // }

    return { sendConsultCountries };
}
