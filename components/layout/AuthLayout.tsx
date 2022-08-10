import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { Box, Link, IconButton } from '@mui/material';
import { ArrowCircleLeftOutlined } from '@mui/icons-material'

interface Props {
    title: string;

}

export const AuthLayout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                <Box sx={{ ml: '100px', mt: '100px' }}>
                    <NextLink href='/' passHref >
                        <Link >
                            <IconButton >
                                <ArrowCircleLeftOutlined fontSize='large' color='primary' />
                            </IconButton>
                        </Link>
                    </NextLink>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 300px)' >



                    {children}
                </Box>
            </main>
        </>
    )
}
