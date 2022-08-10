import NextLink from 'next/link'
import { AppBar, Box, IconButton, Link, Toolbar, Button, Typography, Badge } from '@mui/material'
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

export const Navbar = () => {
    return (
        <AppBar position='sticky' elevation={0}>
            <Toolbar>
                <NextLink href='/' passHref >
                    <Link display='flex' alignItems='center'>
                        <Typography variant='h6' >Oasis |</Typography>
                        <Typography sx={{ marginLeft: 0.5 }}>Shop</Typography>
                    </Link>
                </NextLink>

                <Box flex={1} />

                <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
                    <NextLink href='/category/men' passHref>
                        <Link>
                            <Button>Hombres</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/category/women' passHref>
                        <Link>
                            <Button>Mujeres</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/category/kid' passHref>
                        <Link>
                            <Button>Niños</Button>
                        </Link>
                    </NextLink>
                </Box>

                <Box flex={1} />

                <IconButton aria-label="SearchIcon" >
                    <SearchOutlined />
                </IconButton>

                <NextLink href='/cart' passHref >
                    <Link>
                        <IconButton>
                            <Badge badgeContent={5} color='secondary'>
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>

                <Button>Menu</Button>

            </Toolbar>
        </AppBar>
    )
}
