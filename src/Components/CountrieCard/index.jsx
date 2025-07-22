import {Icons} from '../Icons/index'
import { ConsultCountries } from "../../Hooks/consultCountries";
import { useEffect,useContext, useMemo, useState } from 'react';
import { CountriesContext } from "../../Context/index";

const CountrieCard  = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { sendConsultCountries } = ConsultCountries();
  const context = useContext(CountriesContext);

  useEffect(() => {
    debugger
    if (!context.allCountries || context.allCountries.length === 0) {
      sendConsultCountries();
    }
  }, []);

  const cardsPerPage = 12;
 
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const visibleCards =
  context.allCountries && context.allCountries.length > 0
    ? context.allCountries.slice(indexOfFirstCard, indexOfLastCard)
    : [];
  return(
    <div className="flex justify-center items-center   dark:bg-neutral-900  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {context.allCountries && context.allCountries.length > 0 ? (
            visibleCards.map((element) => (
              <div className="max-w-xs w-full bg-slate-50 rounded-md px-6 py-4 border border-slate-200 dark:bg-zinc-800 dark:border dark:border-slate-700"> 
                  <span className='flex justify-end cursor-pointer dark:text-white'>
                    {Icons['icon-Arrow']}
                  </span>
                  <div className="flex items-center gap-4 mb-4">
                    <img className="w-24 rounded shrink-0" src={element.flags.png} alt="Flag" />
                    <label className="font-medium text-lg pr-4 break-words text-gray-800 dark:text-white w-full">
                      {element.name.common}
                    </label>
                  </div>
                  <div className='flex flex-col gap-5 mb-6'>
                    <span className=' flex flex-row gap-4'>
                      <span className='text-2xl text-blue-500  '>
                        {Icons['icon-users']}
                      </span>
          
                      <label className='font-light dark:text-white'>{element.population}</label>
                    </span>
      
                    <span className='flex flex-row gap-3'>
                      <span className='text-3xl text-green-300 '>  
                        {Icons['icon-money']}
                      </span>
                    
                      <label className='dark:text-white font-light'>{element.currencies}</label>
                    </span>
                  </div>
      
                  <div className='flex flex-row justify-between font-medium text-sm dark:text-white'>
                    <label>{element.region}</label>
                    <label>{element.capital[0]}</label>
                  </div>
             
              </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 dark:text-gray-400">Cargando países...</p>
                )}
        </div>
        {visibleCards.length > 0 && (
          <div className="fixed bottom-5 flex gap-4">
               {[...Array(Math.ceil(context.allCountries.length / cardsPerPage)).keys()].map((page) => (
                 <button
                   key={page}
                   className={`px-4 py-2 rounded ${
                     page + 1 === currentPage ? "bg-blue-500 text-white" : "bg-gray-300 dark:bg-gray-700 dark:text-white"
                   }`}
                   onClick={() => setCurrentPage(page + 1)}
                 >
                   {page + 1}
                 </button>
                ))}
          </div>  

        )}
  </div>
)

}

export default CountrieCard