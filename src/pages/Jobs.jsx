import React, { useEffect, useRef } from 'react';
import Breadcrumbs from '../components/BreadCrums';
import Footer from '../components/Footer';

const Jobs = () => {

    const LoginForm =()=>{

        const formRef = useRef(null);
        useEffect(() => {
            const labels = formRef.current.querySelectorAll(".form-control label");
            labels.forEach((label) => {
              label.innerHTML = label.innerText
                .split("")
                .map(
                  (letter, idx) =>
                    `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
                )
                .join("");
            });
          }, []);
        
          return (
              <form ref={formRef} className=''>
                <div className="form-control  ">
                  <input type="text" required />
                  <label>Nombre</label>
                </div>
        
                <div className="form-control">
                  <input type="email" required />
                  <label>Email</label>
                </div>
        
                <div className="form-control">
                  <input type="tel" required />
                  <label>numero</label>
                </div>

                <div className='flex items-baseline justify-center  flex-col'>

                
  {" "}
  Adjuntar tu HV en formato PDF
  <br />
  <span className="wpcf7-form-control-wrap" data-name="file-231">
    <input
      type="file"
      name="file-231"
      size={40}
      className="wpcf7-form-control wpcf7-file wpcf7-validates-as-required"
      accept=".pdf"
      aria-required="true"
      aria-invalid="false"
      required
    />
  </span>



        
<button type="submit" name="enviar_formulario" id="enviar" className='mt-4 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700'>
        <p>Enviar</p>
      </button>
      </div>
              </form>
          );

    }



    return (
        <div className='pt-24'>
        <Breadcrumbs/>

        <div className='pt-16 flex items-center justify-center '>
            <div className='max-w-7xl'>
             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className='grid place-center'>
                 <div className='flex text-center items-center gap-2 '>
                    <img src='assets/trabajo.png' alt='' width={100}/>
                        <h2 className='text-left text-5xl   '><strong>Trabaja</strong> <br/><strong>Con</strong> Nosotros </h2>
                         </div>
            
                            <p className='text-left text-lg'>¡Gracias por tu interés en unirte a nuestro equipo!<br/> Estamos buscando personas talentosas y 
                        apasionadas para ayudarnos a crecer y mejorar.</p>
                        </div>

                        <div className=''>
                        <figure>
                            <img src='https://www.efecty.com.co/WebApi//uploads/team-1.jpg' alt=''/>
                        </figure>
                        </div>


        </div>
        
        

        </div>

       

        
        </div>


        <div className='mt-16 flex items-center justify-center lg:h-96'>
            <div className='px-4 md:px- lg:px- max-w-7xl  '>
             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className='flex flex-col '>
                 
                            <h3  className='mt-4 text-4xl font-bold text-left'>Aplica</h3>
                            <p className='mt-8 text-left text-lg'>En [empresa] estamos comprometidos con asegurar la igualdad de oportunidades para aquellos que deseen aplicar a nuestras ofertas laborales según los perfiles requeridos. Si estás interesado en aplicar a las diferentes vacantes que tenemos disponibles, registra tu Hoja de Vida en nuestra base de datos.</p>
                        </div>

                        <div className='grid'>
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
