import { Grid, Typography, CardMedia } from '@mui/material';

export const OrderSummary = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <Typography>No de productos</Typography>

            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end' >
                <Typography>3</Typography>

            </Grid>

            <Grid item xs={6}>
                <Typography  >Subtotal</Typography>

            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end' >
                <Typography >{`$${155.44}`}</Typography>

            </Grid>

            <Grid item xs={6}>
                <Typography  >Impuestos (15%)</Typography>

            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end' >
                <Typography >{`$${35.44}`}</Typography>

            </Grid>

            <Grid item xs={6} sx={{ mt: 2 }}>
                <Typography fontWeight={700} >Total</Typography>

            </Grid>
            <Grid item xs={6} display='flex' justifyContent='end' sx={{ mt: 2 }}>
                <Typography variant='subtitle1'>{`$${190.44}`}</Typography>

            </Grid>
        </Grid>
    )
}
