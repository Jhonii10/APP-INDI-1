import { Box, Card, IconButton, Stack, Typography,  } from '@mui/material';
import React, { useState } from 'react';
import Slider from 'react-slick';
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";

const AppSlider = () => {

        const settings = {
            dost:true,
            infinite: true,
            speed: 1000, // Velocidad de cambio automático en milisegundos
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true, // Habilitar cambio automático
            autoplaySpeed: 4000, // Intervalo de cambio automático en milisegundos
        };


        const slidesData = [
            {
            title: "Featured App 1",
            description: "Description for Featured App 1",
            image: "https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_3.jpg",
            },
            {
            title: "Featured App 2",
            description: "Description for Featured App 2",
            image: "https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_2.jpg",
            },
            {
            title: "Featured App 3",
            description: "Description for Featured App 3",
            image: "https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_1.jpg",
            },
        ];

        const [sliderIndex, setSliderIndex] = useState(0);

        const handleSliderChange = (index) => {
            setSliderIndex(index);
        };

    return (
        <>
            <Card sx={{position:'relative', borderRadius:'16px', zIndex:'0'}}>
            <Slider {...settings} beforeChange={(oldIndex, newIndex) => handleSliderChange(newIndex)} >
            {slidesData.map((slide, index) => (
            <>
            <Box key={index} sx={{position:'relative'}}>

            <Stack spacing={2} sx={{position:'absolute' , display:'flex',gap:'8px', p:'24px', width:'100%',bottom:'0px', zIndex:'9', textAlign:'left', color:'rgb(255, 255, 255)'}}>
                <Typography variant="overline" color="primary">
                    Featured App
                </Typography>
                <Typography variant="h5" color="primary">
                    {slide.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {slide.description}
                </Typography>
            </Stack>

        
                <Box component={'span'} sx={{ position:'relative', verticalAlign:'bottom', display:'inline-flex', width:'100%'}} 
                height={{xs:'295px', xl:'320px'}}
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
                <IconButton aria-label="arrow-back" onClick={() => handleSliderChange(sliderIndex - 1) }
                    disabled={sliderIndex === 0} sx={{color:'white'}}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="component-iconify MuiBox-root css-1meyld7 iconify iconify--eva"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            >
            <g id="iconifyReact1305">
                <g id="iconifyReact1306">
                <path
                    id="iconifyReact1307"
                    fill="currentColor"
                    d="M14 5a1 1 0 0 1 .64.23a1 1 0 0 1 .13 1.41L10.29 12l4.32 5.37a1 1 0 0 1-.15 1.41a1 1 0 0 1-1.46-.15l-4.83-6a1 1 0 0 1 0-1.27l5-6A1 1 0 0 1 14 5Z"
                />
                </g>
            </g>
            </svg>
                </IconButton>
                <IconButton aria-label="arrow-forward" onClick={() => handleSliderChange(sliderIndex + 1)}
                    disabled={sliderIndex === slidesData.length - 1} sx={{color:'white'}}>
                <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            className="component-iconify MuiBox-root css-1t9pz9x iconify iconify--eva"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            >
            <g id="iconifyReact1698">
                <g id="iconifyReact1699">
                <path
                    id="iconifyReact1700"
                    fill="currentColor"
                    d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19Z"
                />
                </g>
            </g>
            </svg>
                </IconButton>
            </Stack>

            </Card>
        </>
    );
}

export default AppSlider;
