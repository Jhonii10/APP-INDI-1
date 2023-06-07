import React, { useEffect, useState } from 'react';

const SliderShow = () => {

    const [currentImage, setCurrentImage] = useState(0);


    const images = [
        <div className="slide"><img alt='1' src='/assets/1.png'></img></div>,
        <div className="slide"><img alt='2' src='/assets/2.png'></img></div>,
        <div className="slide"><img alt='3' src='/assets/3.png'></img></div>,
        <div className="slide"><img alt='4' src='/assets/4.png'></img></div>
    ]

    const nextImage = ( )=>{
        setCurrentImage((prevImage)=> (prevImage + 1 )% images.length )
    }
    

    const prevImage = ()=>{
        setCurrentImage((prevImage)=> {
        if(prevImage === 0) {
            return images.length -1
        } else {
            return prevImage-1
        }
    })
    }

    const goToImage = (imageIndex)=>{
        setCurrentImage(imageIndex)
    }

    useEffect(() => {
        const interval = setInterval(nextImage,5000)
        return () => {
            clearInterval(interval)
        };
    }, []);


    return (
        <>
        <div className="slider h-auto w-full">
      {/* Mostrar la diapositiva actual */}
      <div className="slides">{images[currentImage]}</div>

      <div className='buttons'>
      
      {/* Botón para la diapositiva anterior */}
      <button className="prev" onClick={prevImage}><svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="25" height="25"><path d="M19,11H9l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0l-4.29,4.3A2,2,0,0,0,6,12H6a2,2,0,0,0,.59,1.4l4.29,4.3a1,1,0,1,0,1.41-1.42L9,13H19a1,1,0,0,0,0-2Z"/></svg></button>
      
      {/* Botón para la siguiente diapositiva */}
      <button className="next" onClick={nextImage}><svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="25" height="25"><path d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z"/></svg></button>
      
      </div>
      {/* Dots que representan cada diapositiva */}
      <div className="dots">
        {images.map((img,index) => (
          <span
            key={index}
            className={`dot ${index === currentImage ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          ></span>
        ))}
      </div>
    </div>
            
        </>
    );
}

export default SliderShow;
