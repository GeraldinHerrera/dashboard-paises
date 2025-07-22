import CountrieCard from "../../Components/CountrieCard";
import NavBar from "../../Components/NavBar";


const GeneralDashboard = () => {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-900 p-6 overflow-y-hidden">
        <div className="mb-8">
           <NavBar/>
        </div>

        <div className="">
          <CountrieCard/>
        </div>

        
      </div>
    )
  }
  
  export default GeneralDashboard;
  