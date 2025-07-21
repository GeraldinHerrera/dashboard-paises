const API_BASE_URL = import.meta.env.VITE_REACT_APP_URL_API;

export const ENDPOINTS = {
    consultAllCountries : `${API_BASE_URL}region/americas?fields=name,flags,population,currencies,region,capital`,
    
}