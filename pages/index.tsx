import type { NextPage } from 'next'
import Typography from '@mui/material/Typography'
import { ShopLayout } from '../components/layout'
import { ProductList } from '../components/products';
import { useProducts } from '../hooks';
import { FullScreenLoading } from '../components/ui';


const HomePage: NextPage = () => {

  const { products, isLoading, isError } = useProducts('/products');


  return (
    <ShopLayout title={'Oasis-Shop - HomePage'} pageDescription={'Encuentra los mejores productos usados Aqui en Oasis Shop'}>
      <Typography variant="h1" component='h1' >HomePage</Typography>
      <Typography variant="h2" sx={{ marginBottom: 1 }} >Todos los productos</Typography>
      {
        isLoading
          ? <FullScreenLoading />
          : !isError
            ? <ProductList products={products} />
            : <h1>Error de carga de datos...</h1>
      }

    </ShopLayout>
  )
}

export default HomePage
