import NextLink from 'next/link';
import { Typography, Grid, Chip, Link } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { ShopLayout } from "../../components/layout"

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullName', headerName: 'Nombre Completo', width: 250 },

    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra la informacion de si esta paga la factura o no',
        width: 200,
        renderCell: (params: GridValueGetterParams) => {
            return (
                params.row.paid
                    ? <Chip color='success' label='Pagada' variant='outlined' />
                    : <Chip color='error' label='No pagada' variant='filled' />
            )
        }
    },
    {
        field: 'orden',
        headerName: 'Ver orden',
        description: 'Este enlace lo llevara a la orden de la compra',
        width: 200,
        sortable: false,
        renderCell: (params: GridValueGetterParams) => {
            return (
                <NextLink href={`/orders/${params.row.id}`} passHref>
                    <Link underline='always' color='secondary'>
                        Ver orden
                    </Link>
                </NextLink>
            )
        }

    },

];

const rows = [
    { id: 1, paid: true, fullName: 'XbroccoX' },
    { id: 2, paid: false, fullName: 'Salome gomez' },
    { id: 3, paid: true, fullName: 'Samuel Aristizabal' },
    { id: 4, paid: false, fullName: 'Ruben Dario Aristizabal' },
    { id: 5, paid: false, fullName: 'Esteban Aristizabal' },
    { id: 6, paid: true, fullName: 'Felipe Aristizabal' },
]

const HistoryPage = () => {
    return (
        <ShopLayout title={"Historial de ordenes"} pageDescription={"Historial de ordenes del usuario"}>
            <Typography variant="h1" component='h1'>Historial de ordenes</Typography>
            <Grid container >
                <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
                    <DataGrid
                        columns={columns}
                        rows={rows}
                        pageSize={10}
                        rowsPerPageOptions={[10]} />
                </Grid>

            </Grid>
        </ShopLayout>
    )
}

export default HistoryPage