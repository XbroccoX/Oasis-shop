import { FC, useState, useMemo } from 'react';
import NextLink from 'next/link'
import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material"
import { IProduct } from "../../interfaces"

interface Props {
    product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {

    const [isHovered, setIsHovered] = useState(false)

    const productImage = useMemo(() => {
        return isHovered
            ? `products/${product.images[1]}`
            : `products/${product.images[0]}`
    }, [isHovered, product.images])


    return (
        <Grid item
            xs={6}
            sm={4}
            key={product.slug}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            <Card>

                <NextLink href='/product/slug' passHref prefetch={false}>
                    <Link>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt={`products/${product.title}`}
                                image={productImage}
                                onLoad={() => console.log('cargo')}// revisar para colocar un spinner de loader
                            />

                        </CardActionArea>
                    </Link>
                </NextLink>

            </Card>

            <Box sx={{ marginTop: 1, }} className='fadeIn'>
                <Typography fontWeight={700} >{product.title}</Typography>
                <Typography fontWeight={500} >{`$${product.price}`}</Typography>
            </Box>

        </Grid>
    )
}
