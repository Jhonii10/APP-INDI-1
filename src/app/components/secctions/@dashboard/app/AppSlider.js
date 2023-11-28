import { Box, Card, IconButton, Stack, Typography,  } from '@mui/material';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
import SvgColor from '../../../svg-colors/SvgColor';

const AppSlider = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const sliderRef = useRef(sliderIndex);

        const handleSliderChange = (index) => {
            setSliderIndex(index);
        };

        const icon = (name) => <SvgColor src={`/assets/icons/accesories/${name}.svg`} sx={{ width: '20px', height: '20px' }}/>;

    const PrevArrow = () => {
        return (
          <IconButton aria-label="arrow-back" onClick={() => sliderRef.current.slickPrev()}  sx={{color:'#9a9a9a'}}>
                 {icon('ic_arrow_back')} 
          </IconButton>
        );
      };
      
      const NextArrow = () => {
        return (
          <IconButton aria-label="arrow-forward" onClick={() => sliderRef.current.slickNext()} sx={{color:'#9a9a9a'}}>
            {icon('ic_arrow_next')}         
          </IconButton>
        );
      };


        const settings = {
            dost:true,
            infinite: true,
            speed: 1000, // Velocidad de cambio automático en milisegundos
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true, // Habilitar cambio automático
            autoplaySpeed: 3000, // Intervalo de cambio automático en milisegundos
            arrows: false,
        };

        
        


        const slidesData = [
            {
            title: "10 Explorando las gemas ocultas de [Destino]",
            description:'El viejo roble se alzaba alto y majestuoso, sus ramas se mecían suavemente con la brisa.',
            image: "https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_3.jpg",
            },
            {
            title: "10 Explorando las gemas ocultas de [Destino]",
            description:'El viejo roble se alzaba alto y majestuoso, sus ramas se mecían suavemente con la brisa.',
            image: "https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_2.jpg",
            },
            {
            title: "10 Explorando las gemas ocultas de [Destino]",
            description:'El viejo roble se alzaba alto y majestuoso, sus ramas se mecían suavemente con la brisa.',
            image: "https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_1.jpg",
            },
        ];

        

    return (
        <>
            <Card sx={{position:'relative', borderRadius:'16px', zIndex:'0'}}>
            <Slider {...settings} beforeChange={( newIndex) => handleSliderChange(newIndex)} ref={sliderRef} >
            {slidesData.map((slide, index) => (
            <>
            <Box key={index} sx={{position:'relative'}}>

            <Stack  
                sx={{ 
                    position:'absolute' ,
                    display:'flex',
                    gap:'8px',
                    p:'24px',
                    width:'100%',
                    bottom:'0px',
                    zIndex:'9',
                    textAlign:'left',
                    color:'rgb(255, 255, 255)',
                    '& *':{fontFamily:'"Quicksand", sans-serif',}
                    }}>
                <Typography variant="overline" color="rgb(104, 205, 249)">
                    Featured App
                </Typography>
                <Typography  component='a' variant="inherit" color="white">
                <Typography variant='h5' 
                 sx={{
                    fontFamily:'"Quicksand", sans-serif',
                    overflow:'hidden',
                    textOverflow:'ellipsis',
                    whiteSpace:'nowrap',


                 }}>
                    {slide.title}
                </Typography>
                </Typography>
                <Typography component='p' variant="body2" color="white">
                    {slide.description}
                </Typography>
            </Stack>

        
                <Box component={'span'} sx={{ overflow:'hidden', position:'relative', verticalAlign:'bottom', display:'inline-block', width:'100%'}} 
                height={{  xs:'280px', lg:'320px'}}
                >
                <Box component={'span'} >
                <Box
                component={'img'}
                src={slide.image}
                alt={slide.title}
                width={'100%'}
                height={'100%'}
                sx={{objectFit:'cover', verticalAlign:'bottom'}}
                
                
                />


            </Box>
            </Box>
            </Box>
                </>
                ))}
           </Slider>

            <Stack direction="row" spacing={2} sx={{position:'absolute', top:'8px',right:'8px'}}>
            <PrevArrow />
            <NextArrow />
            </Stack>

            <Box component={'ul'} 
                sx={{
                    zIndex:'9',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    top:'16px',
                    left:'16px',
                    position:'absolute',
                    color:'rgb(104, 205, 249)',
                    '& li':{width:'18px', height:'18px', opacity:'0.32', cursor:'pointer'}

                }}
            >
                 {
                    slidesData.map((slide, index) => (
                        <li>
                        <Stack sx={{
                            alignItems:'center',
                            justifyContent:'center',
                            width:'100%',
                            height:'100%'
                        }}>
                            <Typography sx={{
                                width:'8px',
                                height:'8px',
                                borderRadius:'50%',
                                transition:'width 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
                                backgroundColor:'currentcolor'
                            }}/>
                        </Stack>

                        </li>
                        ))
                 }

            </Box>

            </Card>
        </>
    );
}

export default AppSlider;
