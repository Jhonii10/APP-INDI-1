import React from 'react';
import Card from './Card';

const Testimonial = () => {

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

  console.log()

    return (
        <div>
            <section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
      Productos destacados
    </h2>
    <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      {
            products.map(
                product => <Card key={product.id} {...product}/>
            )
        }
      
    </div>
  </div>
</section>

        </div>
    );
}

export default Testimonial;
