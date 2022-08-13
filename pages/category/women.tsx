import { ShopLayout } from '../../components/layout'
import { Typography } from '@mui/material';
import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks/useProducts';
import { FullScreenLoading } from '../../components/ui';

const WomenPage = () => {

    const { products, isError, isLoading } = useProducts(`products?gender=kid`);


    return (
        <ShopLayout title={'Oasis Shop | Women'} pageDescription={'Haz entrado a la categoría para mujeres'}>;
            <Typography variant="h1" component='h1' >Categoria para mujeres</Typography>
            <Typography variant="h2" sx={{ marginBottom: 1 }} >Productos para mujeres</Typography>
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

export default WomenPage