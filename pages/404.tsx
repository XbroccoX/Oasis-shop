import { Box } from '@mui/material';
import { ShopLayout } from '../components/layout';
import Typography from '@mui/material/Typography';

const Custom404 = () => {
    return (
        <ShopLayout title={'404| Page Not Found'} pageDescription={'Page not found'}>
            <Box display='flex' sx={{ flexDirection: { xs: 'column', sm: 'row' } }} justifyContent='center' alignItems='center' height='calc(100vh - 300px)'>
                <Typography variant='h1' component='h1' fontSize={80} fontWeight={150}>404 |</Typography>
                <Typography marginLeft={2} >No Encontramos Ninguna Pagina</Typography>
            </Box>
        </ShopLayout>
    )
}

export default Custom404