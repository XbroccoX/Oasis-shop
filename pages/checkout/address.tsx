import { ShopLayout } from '../../components/layout';
import { Typography, Grid, TextField, FormControl, Select, MenuItem, Box, Button } from '@mui/material';

const AddressPage = () => {
    return (
        <ShopLayout title={'direccion'} pageDescription={'Confirmar direccion del destino'}>
            <Typography variant='h1' component='h1'>Direccion</Typography>

            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="filled"
                        fullWidth
                        label="Nombre"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="filled"
                        fullWidth
                        label="Apellido"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="filled"
                        fullWidth
                        label="Direccion"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="filled"
                        fullWidth
                        label="Direccion opcional"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="filled"
                        fullWidth
                        label="Codigo postal"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="filled"
                        fullWidth
                        label="Ciudad"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="filled"
                        fullWidth
                        label="Telefono"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <Select
                            variant='filled'
                            label='Pais'
                            value={1}
                        >
                            <MenuItem value={1}>Colombia</MenuItem>
                            <MenuItem value={2}>Mexico</MenuItem>
                            <MenuItem value={3}>Venezuela</MenuItem>
                            <MenuItem value={4}>Brazil</MenuItem>
                        </Select>

                    </FormControl>
                </Grid>
            </Grid>
            <Box sx={{ mt: 5 }} display='flex' justifyContent='center' >
                <Button color='secondary' className='circular-btn' size='large' >Revisar pedido</Button>
            </Box>
        </ShopLayout>
    )
}

export default AddressPage