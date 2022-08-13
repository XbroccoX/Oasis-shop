import { ShopLayout } from '../../components/layout'
import { Typography } from '@mui/material';
import { ProductList } from '../../components/products';
import { useProducts } from '../../hooks/useProducts';
import { FullScreenLoading } from '../../components/ui';

const MenPage = () => {

    const { products, isError, isLoading } = useProducts(`products?gender=kid`);


    return (
        <ShopLayout title={'Oasis Shop | Men'} pageDescription={'Haz entrado a la categoría de los Hombres'}>
            <Typography variant="h1" component='h1' >Categoria de Hombres</Typography>
            <Typography variant="h2" sx={{ marginBottom: 1 }} >Productos para Hombres</Typography>
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

export default MenPage