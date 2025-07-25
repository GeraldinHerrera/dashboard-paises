import { useEffect,useContext, useMemo, useState } from 'react'
import { CountriesContext } from "../../Context/index";
import { Icons } from "../Icons/index"
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
} from "@mui/material"

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

const NavBar = () => {

  const { search, setSearch,nameContinents,setNameContinents } = useContext(CountriesContext);

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center px-6 md:px-20 py-3 md:gap-40 rounded dark:bg-neutral-900">
      <div className="flex items-center gap-3">
        <img src="public/img/world.png" alt="world icon" className="w-10 h-10" />
        <h3 className="font-medium text-xl text-gray-800 dark:text-white">Paises</h3>
      </div>
      {/* Buscador*/}
      <div className="relative w-full md:w-1/3 p-1">
        <span className="absolute inset-y-0 left-2 flex items-center text-gray-400 dark:text-gray-300">
          {Icons["icon-search"]}
        </span>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Buscar"
          className="w-full pl-10 pr-4 py-2 bg-neutral-200 border border-gray-300 dark:bg-neutral-700 text-gray-800
           dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filtro por Región */}
      <div className="relative w-full md:w-1/6 p-1">
        <FormControl fullWidth size="small">
          <InputLabel className="dark:text-white text-gray-800">Filtro</InputLabel>
          <Select
            value={nameContinents}
            onChange={(e) => setNameContinents(e.target.value)}
            input={
              <OutlinedInput
                label="Región"
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              />
            }
            className="bg-neutral-200 text-gray-500 border border-gray-300 dark:bg-neutral-700 dark:text-white"
          >
            {regions.map((region) => (
              <MenuItem key={region} value={region}>
                {region}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

      </div>
    </div>
  )
}

export default NavBar
