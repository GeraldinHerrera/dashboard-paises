import { useEffect,useContext, useMemo, useState } from 'react';
import { CountriesContext } from "../../Context/index";
import { Modal, Box, Typography } from '@mui/material';
import { consultInfoCountrie } from "../../Hooks/consultCountries";
const ModalCountrie  = () => {

    const { sendConsultInfo } = consultInfoCountrie();

    const [open, setOpen] = useState(false);
    const { showModal,setShowModal } = useContext(CountriesContext);
    const [mapCountrie , setMapCountrie] = useState([]);

    useEffect(() => {
        if (showModal !== null) {
          (async () => {
            const data = await sendConsultInfo(showModal);
            const latlng = data[0]?.latlng;

            if (!latlng || latlng.length !== 2) {
            throw new Error("Latitud/longitud no disponibles");
            }
            const [lat, lon] = latlng;
            const delta = 1.0;

            const latMin = lat - delta;
            const latMax = lat + delta;
            const lonMin = lon - delta;
            const lonMax = lon + delta;

            const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lonMin}%2C${latMin}%2C${lonMax}%2C${latMax}&layer=mapnik&marker=${lat}%2C${lon}`;
            setMapCountrie(mapUrl);
          })();
        }
      }, [showModal]);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
      };
    return(
        <div>

            {showModal !== null  && (
                <Modal open={true} onClose={() => setShowModal(null)}>
                    <Box className="dark:bg-neutral-900 dark:border border-gray-600" sx={style}>
                    <Typography variant="h6" component="h2" className='text-center dark:text-white'>
                        {showModal}
                    </Typography>
                
                    <Box sx={{ mt: 3, width: '100%', height: 400 }}>
                        <iframe
                        src={mapCountrie}
                        title="Mapa"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        ></iframe>
                    </Box>
                
                        <div className="flex justify-end mt-10 text-white">
                            <button
                                className="bg-blue-500 rounded p-2 w-full"
                                variant="text"
                                onClick={() => setShowModal(null)}
                            >
                                Cerrar
                            </button>
                        </div>
                    </Box>
                </Modal>
            )}
     
        </div>
    )
}


export default ModalCountrie