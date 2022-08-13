import { Box } from '@mui/material';
export const FullScreenLoading = () => {
    return (
        <Box display='flex' justifyContent='center' alignItems='center' sx={{ height: 'calc(100vh - 100px)' }} >
            <div className="spinner">
                <span>L</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
            </div>
        </Box>
    )
}
