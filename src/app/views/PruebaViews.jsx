import { Grid, Typography } from "@mui/material";


const PruebaViews = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{minHeight:'calc(100vh - 110px)',backgroundColor:'primary.main',padding:4, }}
            className="animate__animated animate__fadeIn animate__faster"
        >

        <Grid item xs={12}>
            <Typography color={'white'} variant="h5">
             Cubika app
            </Typography>
        </Grid>


        </Grid>
    );
}

export default PruebaViews;