import { NextPage } from "next"
import NextLink from 'next/link';
import { Box, Typography } from "@mui/material"
import { Link } from '@mui/material';
import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import { ShopLayout } from "../../components/layout"


const emptyPage: NextPage = () => {
    return (
        <ShopLayout title={"Carrito vacio"} pageDescription={"No hay Articulos en carrito de compras"}>
            <Box display='flex' sx={{ flexDirection: { xs: 'column', sm: 'row' } }} justifyContent='center' alignItems='center' height='calc(100vh - 300px)'>
                <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ ml: 5 }}>
                    <Typography variant='h1' component='h1' fontSize={40} fontWeight={150}>Su carrito esta vacio</Typography>
                    <NextLink href='/' passHref>
                        <Link>
                            <Typography variant='h4' component='h4' fontSize={80} fontWeight={150} color='secondary'>Regresar</Typography>
                        </Link>
                    </NextLink>
                </Box>

            </Box>
        </ShopLayout>
    )
}

export default emptyPage