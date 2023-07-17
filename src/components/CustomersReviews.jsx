import React from 'react';
import { useNavigate } from 'react-router-dom';
import reviews from '../models/reviews';



const CustomersReviews = () => {

    const navigate = useNavigate();
    const handleReviews = ()=>{
          navigate('/Reviews')
    }


    return (
        <div>
            <section className="bg-white">
             <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
                  Reseñas de clientes
                </h2>
    <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      {
        reviews.map(review => <div className=" p-8 " key={review.nombre}>
        <div className='flex items-center justify-center'>
       <img
        width={70}
        src={review.img}
        alt={review.nombre}
        className=""
        data-is-loaded="true"
        />
        </div>
       <div className="mt-2">
       <div className="text-base w-full text-black font-bold" aria-hidden="true">{review.nombre}
    </div>
    <div>{review.fecha}</div>
    <div className=" py-2 w-full overflow-hidden text-gray-500  text-md">{review.reseña}</div>
    </div>
    </div>
            
        )}
      
    </div>
    <div className='mt-4'>
                <div className='jhoni-button-10'>
                
                <button className=" font-bold rounded-full  " type="button" onClick={handleReviews}>
                    Ver mas
                    </button>
                    
                    </div>
                    </div>
  </div>
</section>  

        
            
        </div>
    );
}

export default CustomersReviews;
