import React from 'react';
import Lista from '../components/Lista';
import Testimonial from '../components/Testimonial';
import SectionJob from '../components/SectionJob';
import CustomersReviews from '../components/CustomersReviews';
import Footer from '../components/Footer';

const Index = () => {
    return (
        <>
        <div className='j-10-10 lg:h-screen '>
             
          <div className=" mx-auto min-1200 px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 ">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16  w-full">
                <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                 alt="Party"
                 src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                 className="absolute inset-0 h-full w-full object-cover "
                />
                 </div> 
                <div className=" max-w-lg lg:text-left">
                    <h1 className=" font-bold md:text-3xl lg:text-5xl ">
                        Organic Wooden Toys 
                        <br />
                        and Cardboard Puzzles.
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray">
                         Deleite a sus clientes con juguetes sostenibles de calidad, a precios asequibles
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                </div>

                <div className="max-w-lg mx-auto">
                    <form className="bg-transparent  flex items-center">
                    <div className="relative flex items-center w-full">
                        <svg
                            className="absolute left-3 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.5 2H20.5C21.327 2 22 2.673 22 3.5V18.5C22 19.327 21.327 20 20.5 20H3.5C2.673 20 2 19.327 2 18.5V3.5C2 2.673 2.673 2 3.5 2zm0 2L12 9.333 20.5 4M20.5"
        
/>
                        </svg>
                    <input
                    className="pl-10 pr-3 py-2 w-full text-gray-700 placeholder-gray-400 border rounded-full focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="name@gmail.com"/>
                    </div>
                    <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-full  focus:outline-none focus:shadow-outline"
                    type="button">
                    Enviar
                    </button>
                    </form>

                    <div className='border border-grey-100 my-14'></div>
 
  
                   
            </div>  
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
                    Ver todas nuestras categorias
                    </button>
        </div>
    
    </div>
  </div>


    <div className="absolute bottom-4 left-4 z-2 max-sm:hidden  ">
    <div className="flex flex-row items-center justify-start select-none cursor-pointer text-md leading-2" role="button" tabindex="0">
    <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.539 14.9219H15.6405C13.379 14.9219 11.539 16.7619 11.539 19.0235C11.539 19.4769 11.9059 19.8438 12.3593 19.8438C12.8127 19.8438 13.1796 19.4769 13.1796 19.0235C13.1796 17.6664 14.2835 16.5625 15.6405 16.5625H25.539C26.896 16.5625 28 15.4586 28 14.1016C28 12.7445 26.896 11.6406 25.539 11.6406H24.7187V10.2571C24.7187 4.68712 20.133 0.156189 14.5631 0.156189C11.8642 0.156189 9.32717 1.20723 7.42059 3.11463L7.28278 3.25244C6.51452 2.34479 5.37538 1.79688 4.15611 1.79688C3.7027 1.79688 3.3358 2.16377 3.3358 2.61719V7.29075L0.137661 12.006C-0.029793 12.2575 -0.0457619 12.5812 0.096809 12.8479C0.23938 13.1147 0.517358 13.2814 0.820218 13.2814H11.539V12.461C11.539 9.29511 14.1153 6.71882 17.2812 6.71882C17.7346 6.71882 18.1015 7.08572 18.1015 7.53914C18.1015 7.99256 17.7346 8.35946 17.2812 8.35946C15.0197 8.35946 13.1796 10.1995 13.1796 12.461V13.2814H25.5391C25.9917 13.2814 26.3594 13.6491 26.3594 14.1017C26.3594 14.5543 25.9916 14.9219 25.539 14.9219ZM5.79675 9.99998C5.34371 9.99998 4.97643 9.6327 4.97643 9.17966C4.97643 8.72652 5.34371 8.35935 5.79675 8.35935C6.24978 8.35935 6.61706 8.72652 6.61706 9.17966C6.61706 9.6327 6.24972 9.99998 5.79675 9.99998Z" fill="#9D9D9D">
    </path>
    </svg>
    <span className='ml-2'>—  Scroll to discover</span>
    </div>
    </div>

        </div>
    
        <div className='px-4 lg:px-16'>
            <div className='mt-12'>
            <h2 className='jhoni-font'>Dropdown</h2>
            <div className=' mt-12'>
                <Lista/>
                <Testimonial/>
                

            </div>
            </div>

        </div>

        <SectionJob/>
        <CustomersReviews/>
        <Footer/>
        </>
        

    );
}

export default Index;
