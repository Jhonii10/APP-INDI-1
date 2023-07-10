import React from 'react';

const SectionJob = () => {
    return (
        <div>
            <div className='relative w-full h-auto'>
                <div className=' top-0 left-0 w-full h-full '>
                
                <div className='jhoni-secction-job '>
                <h3 className='jhoni-font mt-4'>Interesado en trabajar con nosotros?</h3>
                    <div className='mt-4'>Por favor, haga clic en el botón de abajo.</div>
                    <div className="max-w-lg mx-auto mt-4">
                    <form className="bg-transparent  flex items-center mt-4">
                    <div className="relative flex items-center w-full">
                        <svg
                            className="absolute left-3 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.5 2H20.5C21.327 2 22 2.673 22 3.5V18.5C22 19.327 21.327 20 20.5 20H3.5C2.673 20 2 19.327 2 18.5V3.5C2 2.673 2.673 2 3.5 2zm0 2L12 9.333 20.5 4M20.5"
        
/>
                        </svg>
                    <input
                    className="pl-10 pr-3 py-2 w-full text-gray-700 placeholder-gray-400 border rounded-full focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="name@gmail.com"/>
                    </div>
                    <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-full  focus:outline-none focus:shadow-outline "
                    type="button">
                    Enviar
                    </button>
                    </form>

 
  
                   
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-4 rounded-full focus:outline-none focus:shadow-outline mt-4" type="button">
            Porque nosotros
                    </button>
                    
                </div>
                </div>

            </div>
            
        </div>
    );
}

export default SectionJob;
