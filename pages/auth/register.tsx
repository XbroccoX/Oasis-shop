import NextLink from 'next/link';
import { Grid, Box, Typography, TextField, Button, Link } from '@mui/material';
import { AuthLayout } from '../../components/layout'

const RegisterPage = () => {
    return (
        <AuthLayout title={'Registro'}>
            <Box sx={{ width: 350, padding: '10px 20px' }} >

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h1' component='h1'> Crear cuenta </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Nombre y Apellido'
                            fullWidth
                            variant='filled'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Correo electronico'
                            fullWidth
                            variant='filled'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Contraseña"
                            fullWidth
                            variant='filled'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="secondary" className='circular-btn' size='large' fullWidth>Registrarse</Button>
                    </Grid>
                    <Grid item xs={12} display='flex' justifyContent='end'>

                        <NextLink href='/auth/login' passHref>
                            <Link underline='always' color='secondary'>
                                Ya tienes cuenta?
                            </Link>
                        </NextLink>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    )
}

export default RegisterPage