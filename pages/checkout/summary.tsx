import NextLink from 'next/link';
import { Typography, Grid, Card, CardContent, Divider, Box, Button, Link, IconButton } from '@mui/material';
import { CartList, OrderSummary } from "../../components/cart"
import { ShopLayout } from "../../components/layout"
import { EditOutlined } from '@mui/icons-material';

const SummaryPage = () => {
    return (
        <ShopLayout title={"Resumen de orden"} pageDescription={"Resumen de la orden"}>
            <Typography variant="h1" component='h1'>Resumen de la orden</Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={7} >
                    <CartList />
                </Grid>
                <Grid item xs={12} sm={5} >
                    <Card className="summary-card">
                        <CardContent>
                            <Typography variant="h2" >Resumen (3 productos)</Typography>
                            <Divider sx={{ my: 1 }} />

                            <Box display='flex' justifyContent='space-between' alignItems='center' sx={{ mb: 2 }}>
                                <Typography variant='subtitle1' >Direccion de entrega</Typography>
                                <NextLink href='/checkout/address' passHref>
                                    <Link>
                                        <IconButton>
                                            <EditOutlined />
                                        </IconButton>
                                    </Link>
                                </NextLink>
                            </Box>


                            <Typography>Fernando Herrera</Typography>
                            <Typography>Conjunton sierar bonita casa 25</Typography>
                            <Typography>Codigo postal</Typography>
                            <Typography>Mnanizales</Typography>
                            <Typography>Colombia</Typography>
                            <Typography>+57 310403210</Typography>

                            <Divider sx={{ my: 1 }} />


                            <Box display='flex' justifyContent='space-between' alignItems='center' sx={{ mb: 2 }}>
                                <Typography variant='subtitle1' >Orden de productos</Typography>
                                <NextLink href='/cart' passHref>
                                    <Link>
                                        <IconButton>
                                            <EditOutlined />
                                        </IconButton>
                                    </Link>
                                </NextLink>
                            </Box>

                            <OrderSummary />

                            <Box sx={{ mt: 3 }}>
                                <Button color='secondary' className='circular-btn' fullWidth>
                                    Confirmar orden
                                </Button>
                            </Box>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default SummaryPage