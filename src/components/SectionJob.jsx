import React from 'react';
import BotonPM from './BotonPM';
import { useNavigate } from 'react-router-dom';

const SectionJob = () => {
    
    const navigate = useNavigate();

    const handlePorqueNosotros = ()=>{
        navigate('/trabajos')
    }

    return (
        <>
            <div className='relative w-full h-auto'>
                <div className=' top-0 left-0 w-full h-full '>
                    <div className='jhoni-secction-job '>
                        <h3 className='jhoni-font mt-4'>Interesado en trabajar con nosotros?</h3>
                        <div className='mt-4'>Por favor, haga clic en el botón de abajo.</div>
                        <div className="w-full max-w-xl mx-auto mt-4 p-4 ">
                        <BotonPM/>
                        </div>

                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-4 rounded-full focus:outline-none focus:shadow-outline mt-4" type="button"
                        onClick={handlePorqueNosotros}
                        > Porque nosotros
                        </button>
                    </div>
                </div>

            </div>
            
        </>
    );
}

export default SectionJob;
