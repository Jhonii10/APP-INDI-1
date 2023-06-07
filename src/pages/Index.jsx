import React from 'react';
import Navbar from '../components/Navbar';
import SliderShow from '../components/SliderShow';

const Index = () => {
    return (
        <div>
        <div  className='App'>
        <SliderShow/>
        </div>
        
        <div class="bg-white">
  Contenido adicional después del scroll
</div>
        </div>
        

    );
}

export default Index;
