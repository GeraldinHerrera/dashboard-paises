import CountrieCard from "../../Components/CountrieCard";
import FiltersDash from "../../Components/FiltersDash";
import NavBar from "../../Components/NavBar";


const GeneralDashboard = () => {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-900 p-6">
        <div>
           <NavBar/>
        </div>
   

        <div className="">
          <CountrieCard/>
        </div>
      </div>
    )
  }
  
  export default GeneralDashboard;
  