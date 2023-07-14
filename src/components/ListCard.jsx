import React from 'react';
import Card from './Card';
import { category } from '../models/category.js';

const ListCard = () => {
    
    console.log({category})

        return (
            <div>
                <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6  ">
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8">
          {
            category.map(
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
