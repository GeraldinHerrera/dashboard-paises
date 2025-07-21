import {Icons} from '../Icons/index'
const NavBar = () => {

 return(
        <div className="w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-6 gap-4 bg-white dark:bg-neutral-900">
            <div className="flex items-center gap-3">
                <img src="public/img/world.png" alt="world icon" className="w-8 h-8" />
                <h3 className="font-medium text-xl text-gray-800 dark:text-white">Countries</h3>
            </div>

       
            <div className="relative w-full md:w-1/3 p-1">
                <span className="absolute inset-y-0 left-2 flex items-center text-gray-400 dark:text-gray-300">
                    {Icons['icon-search']}
                </span>
                <input
                type="text"
                placeholder="Buscar"
                className="w-full pl-10 pr-4 py-2 bg-neutral-200 dark:bg-neutral-700 text-gray-800 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>

 )
}


export default NavBar