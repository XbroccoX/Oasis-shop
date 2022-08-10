import NextLink from 'next/link';
import { Typography, Grid, Card, CardContent, Divider, Box, Button, Link, IconButton, Chip } from '@mui/material';
import { CartList, OrderSummary } from "../../components/cart"
import { ShopLayout } from "../../components/layout"
import { CreditCardOffOutlined, CreditScoreOutlined, EditOutlined } from '@mui/icons-material';

const OrderPage = () => {
    return (
        <ShopLayout title={"Resumen de la orden 12341"} pageDescription={"Resumen de la orden"}>
            <Typography variant="h1" component='h1'>Orden: 123</Typography>

            {/* <Chip
                sx={{ my: 2 }}
                label='Pendiente de pago'
                variant='outlined'
                color='error'
                icon={<CreditCardOffOutlined />}
            /> */}
            <Chip
                sx={{ my: 2 }}
                label='Pagada'
                variant='outlined'
                color='success'
                icon={<CreditScoreOutlined />}
            />

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
                                <h1>Pagar</h1>
                                <Chip
                                    sx={{ my: 2 }}
                                    label='Orden ya fue pagada'
                                    variant='outlined'
                                    color='success'
                                    icon={<CreditScoreOutlined />}
                                />
                            </Box>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default OrderPage