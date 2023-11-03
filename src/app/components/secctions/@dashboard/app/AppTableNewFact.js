import { Box, ButtonBase, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import SvgColor from '../../../svg-colors/SvgColor';

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
                    <ButtonBase>
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


const icon = (name) => <SvgColor src={`/assets/icons/accesories/${name}.svg`} sx={{ }}/>;

const NewFactu = ({factura, categoria, precio, estado})=>{
    
    const validacionEstado = estado.trim()
    console.log(validacionEstado)
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
            <ButtonBase>
                {icon('ic_points_options')}
            </ButtonBase>
          </TableCell>
        </TableRow>

        </>
    )
}