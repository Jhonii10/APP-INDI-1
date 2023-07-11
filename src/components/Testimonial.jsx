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
        nombre:'Jumping Сlowns',
        id:'peces',
        categoria:'hogar',
        type:'hogar'

    },
    {
        nombre:'Fishing game',
        id:'carros',
        categoria:'juguetes',
        type:'juguetes'

    },
    {
        nombre:'Crane truck',
        id:'tubos',
        categoria:'navidad',
        type:'navidad'

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
