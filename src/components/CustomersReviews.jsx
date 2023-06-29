import React from 'react';

const reviews = [
    {
        img:'https://data.cubika.toys/assets/cache_image/media/reviews/kids-retail-concept_768x0_8cf.png',
        nombre:'Kids Retail Concept, Romania',
        fecha:'Dec 28, 2021',
        reseña:'Durante más de 5 años hemos tenido el honor de ser los representantes de las marcas Cubika y Puzzlika en Rumania. Los productos siempre han tenido el más alto nivel de calidad y siempre hemos disfrutado del hecho de que el equipo de Cubika se esfuerza constantemente por traer productos nuevos y muy atractivos a la gama. Estamos felices de ser parte del equipo de Levenya y me gustaría agradecer a Nicholas y Vitalyi por la extraordinaria asociación que tenemos y por la confianza y el apoyo que nos han brindado desde el principio'

    },
    {
        img:'https://data.cubika.toys/assets/cache_image/media/reviews/photo-2021-11-23-10-48-39_768x0_0b2.jpg',
        nombre:'MagicBaby, República Checa',
        fecha:'28 de septiembre de 2021',
        reseña:'The goods of the CUBIKA and Puzzlika brands have very high-quality and precise processing, pleasing design and are completely affordable, which is why they quickly found their place on our market. From a business point of view, we can only recommend these brands to everyone, because we do not even have to deal with proper complaints. In addition, Levenya is a very good business partner and provides us with quality service.'

    },
    {
        img:'https://data.cubika.toys/assets/cache_image/media/otc-logo_768x0_8cf.png',
        nombre:'Old Teddys Company, Spain',
        fecha:'Sep 27, 2021',
        reseña:'Antes de introducir una nueva marca en el mercado español, nos aseguramos de que represente los valores de nuestra empresa. En este sentido, Cubika y Puzzlika destacan por producir juguetes y juegos sostenibles de alta calidad y con un gran contenido educativo y lúdico. Los bloques de construcción, las torres de madera, los rompecabezas, los juegos de enhebrar, los mosaicos o los juegos de imitación, todo ello en madera procedente de bosques sostenibles o de cartón FSC, y con pintura vegana no tóxica, son perfectos en cuanto a diseño y valor lúdico.'

    },
]

const CustomersReviews = () => {
    return (
        <div>
            <section className="bg-white">
             <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
                  Reseñas de clientes
                </h2>
    <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      {
        reviews.map(review => <div className=" p-8 ">
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
                
                <button className=" font-bold rounded-full  " type="button">
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
