import type { NextPage } from 'next'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { ShopLayout } from '../components/layout'
import { initialData } from '../database/products';
import CardMedia from '@mui/material/CardMedia'
import { Card, CardActionArea } from '@mui/material';
import { ProductList } from '../components/products';


const Home: NextPage = () => {
  return (
    <ShopLayout title={'Oasis-Shop - Home'} pageDescription={'Encuentra los mejores productos usados Aqui en Oasis Shop'}>
      <Typography variant="h1" component='h1' >Home</Typography>
      <Typography variant="h2" sx={{ marginBottom: 1 }} >Todos los productos</Typography>

      <ProductList products={initialData.products as any} />

    </ShopLayout>
  )
}

export default Home
