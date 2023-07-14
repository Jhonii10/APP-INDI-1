import React from 'react';
import Breadcrumbs from '../components/BreadCrums';
import RedesSociales from '../components/RedesSociales';
import SectionJob from '../components/SectionJob';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className='pt-24'>
        <Breadcrumbs/>
        <div className='pt-16 flex items-center justify-center'>
            <div className='px-4 md:px-16 lg:px-32 max-w-6xl '>
            <h2 className='text-4xl text-left'>Contactanos</h2>
            <div className='mt-12  '>


            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 ">
      <div className="rounded-lg  p-6 border-2 border-gray-300">
 
         <div className='flex justify-center'>
        <img src='assets/company.svg' alt='' width={50}/>
        </div>
        
        <h2 className=' mt-4 font-bold'>Oficina principal</h2>
        <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
        Centro comercial paseo de la quinta Cl. 5 #46-83, Local 239
        
        </p>
      
      </div>

      <div className="rounded-lg  p-6 border-2 border-gray-300">

         <div className='flex justify-center'>
        <img src='assets/reloj.svg' alt='' width={50}/>
        </div>
        
        <h2 className='mt-4 font-bold'>Horario de atencion</h2>
        <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
        Lunes a Viernes: 7am – 4pm Sábado: 8am – 1pm
        
        </p>
   
      </div>

      <div className="rounded-lg  p-6 border-2 border-gray-300">
         <div className='flex justify-center'>
        <img src='assets/email.svg' alt='' width={50}/>
        </div>
        
        <h2 className='mt-4 font-bold'>Correo electronico</h2>
        <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
        PQRS: pqr@losreblujos<br/>depati.com
        </p>
      </div>

      <div className="rounded-lg  p-6 border-2 border-gray-300" >
       
         <div className='flex justify-center'>
        <img src='assets/telefono.svg' alt='' width={50}/>
        </div>
        
        <h2 className='mt-4 font-bold'>Telefonos</h2>
        <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
        (602) 5521230 | 317 3705897
        </p>
        
      </div>

      
  </div>


  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-16">
      

<div>
        <h2 className="text-left text-3xl font-medium" >
        Ponte en contacto con nosotros
        </h2>
        <p className="mt-4 text-sm text-gray-500 text-left">
        Escríbenos por cualquiera de nuestras cuentas de redes sociales o a nuestro correo electrónico para cualquier pregunta, duda, queja, reclamo, sugerencias o felicitaciones. Déjanos conocer tu duda en el formulario o correo de contacto.
        </p>
        <div className='mt-6'>
        <RedesSociales/>
        </div>
      </div>


      <div>
      <div className="contact_form">
  <div className="formulario">
    <form action="submeter-formulario.php" method="post" className='colocar_nombre'>
      
        <label htmlFor="nombre" className="colocar_nombre">
          Nombre
        </label>
        <input
          type="text"
          name="introducir_nombre"
          id="nombre"
          required="obligatorio"
          placeholder="Nombre "
        />
      
        <label htmlFor="email" className="colocar_email">
          Email
        </label>
        <input
          type="email"
          name="introducir_email"
          id="email"
          required="obligatorio"
          placeholder="example@gmail.com"
        />
     
        <label htmlFor="telefone" className="colocar_telefono">
          Teléfono
        </label>
        <input
          type="tel"
          name="introducir_telefono"
          id="telefono"
          placeholder="Numero de teléfono"
        />

    
        <label htmlFor="mensaje" className="colocar_mensaje">
          Mensaje
        </label>
        <textarea
          name="introducir_mensaje"
          className="texto_mensaje"
          id="mensaje"
          required="obligatorio"
          placeholder="Deja aquí tu comentario..."
          defaultValue={""}
        />

      <button type="submit" name="enviar_formulario" id="enviar" className=' rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700'>
        <p>Enviar</p>
      </button>
      
    </form>
  </div>
</div>
      </div>
    </div>




        </div>
        </div>
        </div>

        <SectionJob/>
        <div className='mt-16'>
        <Footer/>
        </div>
        </div>
    );
}

export default Contact;
