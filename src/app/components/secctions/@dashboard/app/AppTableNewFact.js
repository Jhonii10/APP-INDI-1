import { Box, ButtonBase, Card, CardHeader, Divider, MenuItem, Paper, Popover, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react';
import SvgColor from '../../../svg-colors/SvgColor';
import Iconify from '../../../iconify/Iconify';


const OPTIONDATEFACT = [
    {
        name:'Descargar',
        url:'eva:cloud-download-fill'
    },
    {
        name:'Imprimir',
        url:'solar:printer-minimalistic-bold'
    },
    {
        name:'Compartir',
        url:'ic:sharp-share'
    },
    {
        name:'Eliminar',
        url:'fluent:delete-24-filled'
    }
]

const icon = (name) => <SvgColor src={`/assets/icons/accesories/${name}.svg`} />;

const AppTableNewFact = () => {


    const DATE = [
        {
            factura:'INV-1990',
            categoria: 'Apple',
            precio:'$450,000',
            estado : 'Pagado'
        },
        {
            factura:'INV-1991',
            categoria: 'Android',
            precio:'$350,000',
            estado : 'Pago pendiente'
        },
        {
            factura:'INV-1992',
            categoria: 'Windows',
            precio:'$850,000',
            estado : 'En progreso'
        },
        {
            factura:'INV-1993',
            categoria: 'Mac',
            precio:'$2,350,000',
            estado : 'Pagado'
        },
        {
            factura:'INV-1994',
            categoria: 'Apple',
            precio:'$1,350,000',
            estado : 'Pagado'
        }
    ]
    
   


    return (
        <Card>
            
                <CardHeader title={'Nuevas facturas'} sx={{textAlign:'left','& span':{fontWeight:'700' ,fontSize:'1.125rem',fontFamily:'"Quicksand", sans-serif'}}}/>
                
            <TableContainer component={Paper} sx={{boxShadow:'none'}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
          <TableRow sx={{backgroundColor:'rgb(244, 246, 248)'}}>
            {
                ['ID factura','Categoria','Precio','Estado','Opciones'].map((item,index)=>(
                    <TableCell 
                        key={index}
                        sx={{
                            color:'rgb(99, 115, 129)',
                            fontFamily:'"Quicksand", sans-serif',
                            fontWeight:700,

                        }}
                        >
                        {item}
                    </TableCell>
                ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
        {
            DATE.map(({factura,categoria,precio,estado})=>(
                <NewFactu factura={factura} categoria={categoria} precio={precio} estado={estado} />
            ))
        }


        </TableBody>

            </Table>
            
                    
                </TableContainer>
                <Box sx={{
                    padding:'16px',
                    textAlign:'right'
                }}>
                    <ButtonBase sx={{height:'30px', fontSize:'14px',p:'4px', fontWeight:700,fontFamily:'"Quicksand", sans-serif','& .css-vr1fd5':{width:'18px', height:'18px', marginLeft:'1px' }}} >
                      <Typography variant='font'>
                        Ver Todo
                      </Typography>
                      {icon('ic_arrow_next')}

                    </ButtonBase>
                </Box>
            
        </Card>

    );
}

export default AppTableNewFact;




const NewFactu = ({factura, categoria, precio, estado})=>{
    
    const validacionEstado = estado.trim();
    const [open, setOpen] = useState(null);

    const handleOpen = (event) => {
        setOpen(event.currentTarget);
      };
    
      const handleClose = () => {
        setOpen(null);
      };

    return(
        <>
        <TableRow
          key={factura}
          sx={{  border: 0, '& td, th':{fontFamily:'"Quicksand", sans-serif !important' }}}
        >
          <TableCell component="th" scope="row">
            {factura}
          </TableCell>
          <TableCell >{categoria}</TableCell>
          <TableCell >{precio}</TableCell>
          <TableCell >
            <Box component={'span'} sx={{
                    height:'24px',
                    borderRadius:'6px',
                    display:'inline-flex',
                    alignItems:'center',
                    justifyContent:'center',
                    whiteSpace:'nowrap',
                    fontWeight:700,
                    minWidth:'24px',
                    padding:'0px 6px'
                    }}
                    color={validacionEstado ==='Pagado' ?'rgb(17, 141, 87)':'rgb(183, 29, 24)'}
                    backgroundColor={validacionEstado ==='Pagado' ?'rgba(34, 197, 94, 0.16)':'rgba(255, 86, 48, 0.16)'}
                    >
                {estado}
             </Box>
            </TableCell>
            <TableCell align='center'>
                <ButtonBase sx={{
                    color:'rgb(99, 115, 129)',
                    borderRadius:'50%',
                    padding:'8px'
                    }}
                    onClick={handleOpen}
                    >
                    {icon('ic_points_options')}
                </ButtonBase>
                <Popover
            open={Boolean(open)}
            anchorEl={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{
            sx: {
                p: '4px',
                mt: '-6px',
                ml: 0.75,
                width: 150,
                overflow:'inherit',
                backdropFilter:'blur(20px)',
                backgroundColor:'rgba(255, 255, 255, 0.75)',
                borderRadius:'10px'
            },
            }}
            >
            <Typography 
               component={'span'}
               sx={{
                width:14,
                height:14,
                position:'absolute',
                borderBottomLeftRadius:'3.5px',
                clipPath:'polygon(0% 0%, 100% 100%, 0% 100%)',
                border:'1px solid rgba(145, 158, 171, 0.12)',
                backgroundColor:'rgba(255, 255, 255, 0.8)',
                backdropFilter:'blur(6px)',
                right:'-6.5px',
                transform:'rotate(-135deg)',
                top:'20px'

               }}/>
               {
                OPTIONDATEFACT.map(({name,url}, index)=>{
                    return (
                        <>
                            {index === OPTIONDATEFACT.length - 1 && <Divider   sx={{borderWidth:'0px 0px thin',borderColor:'rgba(145, 158, 171, 0.2)', borderStyle:'dashed'}}/>}
                            <MenuItem 
                                key={index}
                                sx={{
                                    padding:'6px 8px',
                                    borderRadius:'6px',
                                    fontFamily:'"Quicksand", sans-serif',
                                    ...(index === OPTIONDATEFACT.length - 1 && {color:'rgb(255, 86, 48)', '& svg':{color:'rgb(255, 86, 48)'}}),
                                    ...(!(index === OPTIONDATEFACT.length - 1) &&{marginBottom:'4px'}),
                                    fontSize:'0.875rem',
                                    fontWeight:'500'
                                    
                                }}
                                onClick={handleClose}
                                >
                                    
                                    <Iconify icon={url} sx={{marginRight:'6px', }}/>
                                    {name}
                            </MenuItem>
                        </>)
                })
               }
            </Popover>
            </TableCell>
        </TableRow>

        </>
    )
}


