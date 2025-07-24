import { useEffect,useContext, useMemo, useState } from 'react';
import CountrieCard from "../../Components/CountrieCard";
import ModalCountrie from "../../Components/ModalCountrie";
import NavBar from "../../Components/NavBar";
import { CountriesContext } from "../../Context/index";


const GeneralDashboard = () => {
  const { showModal } = useContext(CountriesContext);
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-900 p-6 overflow-y-hidden transition-colors duration-500 ease-in-out">
        <div className="mb-8">
           <NavBar/>
        </div>

        <div className="">
          <CountrieCard/>
          <div className="modal">
            {showModal !== null  && (
              <ModalCountrie/>
            )}
          </div>
        </div>

        
      </div>
    )
  }
  
  export default GeneralDashboard;
  