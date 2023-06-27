import React from 'react';
import Card from './Card';

const ListCard = () => {
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
        {
            nombre:'Crane truck',
            id:'tubos',
            categoria:'navidad',
            type:'navidad'
    
        },
        {
            nombre:'Crane truck',
            id:'tubos',
            categoria:'navidad',
            type:'navidad'
    
        },
        {
            nombre:'Crane truck',
            id:'tubos',
            categoria:'navidad',
            type:'navidad'
    
        },
        {
            nombre:'Crane truck',
            id:'tubos',
            categoria:'navidad',
            type:'navidad'
    
        },
        {
            nombre:'Crane truck',
            id:'tubos',
            categoria:'navidad',
            type:'navidad'
    
        },
        {
            nombre:'Crane truck',
            id:'tubos',
            categoria:'navidad',
            type:'navidad'
    
        },
        {
            nombre:'Crane truck',
            id:'tubos',
            categoria:'navidad',
            type:'navidad'
    
        },
        {
            nombre:'Crane truck',
            id:'tubos',
            categoria:'navidad',
            type:'navidad'
    
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
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6  ">
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8">
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

export default ListCard;
