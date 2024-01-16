import React from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const Testimonial = () => {

    const navigate = useNavigate()

    const handleVerMas = ()=>{
        navigate('/productos')

    }

   const products = [
    {
        nombre:'Si estás pensando en remodelar y agregar nuevos estilos en la decoración de tu hogar u oficina, el lugar ideal para encontrar: portarretratos, espejos, cuadros decorativos, floreros, adornos de cerámica, cortinas, alfombras y mucho más. ¡Te esperamos!',
        id:'peces',
        categoria:'Hogar',
        type:'hogar'

    },
    {
        nombre:'Regálale a los más pequeños un mundo lleno de creatividad con nuestros juguetes para niñas, niños, bebés y enséñales de una forma divertida a aprender con nuestros juguetes didácticos o educativos. Ven a tu nuestra tienda más cercana.',
        id:'carros',
        categoria:'Juguetes',
        type:'Juguetes'

    },
    {
        nombre:'Cocinar es un arte en el que necesitas las herramientas perfectas para conquistar el paladar de tus seres queridos. Encuentra sartenes, ollas, tablas para picar, temporizadores y mucho más. Visita tu sala más cercana.',
        id:'tubos',
        categoria:'Cocina',
        type:'Cocina'

    },
   ]

    return (
        <div>
            <section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
      Categorias destacadas
    </h2>
    <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      {
            products.map(
                product => <Card key={product.id} {...product}/>
            )
        }
      
    </div>
    <div className='mt-24'>
                <div className='jhoni-button-10'>
                
                <button className=" font-bold rounded-full  " type="button" onClick={handleVerMas}>
                    Ver todas nuestras categorias
                    </button>
                    
                    </div>
                    </div>
  </div>
</section>

        </div>
    );
}

export default Testimonial;
