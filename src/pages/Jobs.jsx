import React from 'react';
import Breadcrumbs from '../components/BreadCrums';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

const Jobs = () => {



    return (
        <div className='pt-28'>
        <Breadcrumbs/>

        <div className='lg:pt-16 pt-4 flex items-center justify-center '>
            <div className='max-w-7xl'>
             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className='grid place-center'>
                 <div className='flex text-center items-center gap-2 '>
                    <img src='assets/trabajo.png' alt='' width={100}/>
                        <h2 className='text-left lg:text-5xl text-3xl  '><strong>Trabaja</strong> <br/><strong>Con</strong> Nosotros </h2>
                         </div>
            
                            <p className='lg:text-left md:text-left sm:text-center text-lg pt-4'>¡Gracias por tu interés en unirte a nuestro equipo!<br/> Estamos buscando personas talentosas y 
                        apasionadas para ayudarnos a crecer y mejorar.</p>
                        </div>

                        <div className='pt-4'>
                        <figure>
                            <img src='https://www.efecty.com.co/WebApi//uploads/team-1.jpg' alt=''/>
                        </figure>
                        </div>


        </div>
        
        

        </div>

       

        
        </div>


        <div className='lg:mt-16 sm:mt-4 flex items-center justify-center lg:h-96'>
            <div className='px-4 md:px- lg:px- max-w-7xl  '>
             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className='flex flex-col '>
                 
                            <h3  className='mt-4 text-4xl font-bold text-left'>Aplica</h3>
                            <p className='mt-8 text-left text-lg'>En [empresa] estamos comprometidos con asegurar la igualdad de oportunidades para aquellos que deseen aplicar a nuestras ofertas laborales según los perfiles requeridos. Si estás interesado en aplicar a las diferentes vacantes que tenemos disponibles, registra tu Hoja de Vida en nuestra base de datos.</p>
                        </div>

                        <div className=''>
                          <h3 className='mt-4 text-3xl font-bold text-left'>Envianos tu hoja de vida</h3>
                          <LoginForm/>
                        </div>


        </div>
        
        </div>

        

        
        </div>

        <div className='mt-16'>
        <Footer/>
        </div>
        
        </div>
    );
}

export default Jobs;
