import { Box, Typography } from '@mui/material';
import React from 'react';
import FeedbackForm from '../forms/FeedbackForm';


export default function AromaticBarForm({handleUpdateData}) {
    








    return (
        <div className="aromaticBar_form">

            {/* headerbar */}

            <Box
                sx={{ width: "100%", height: "65px", backgroundColor: "white" }}
            >
                <Typography variant='h5' sx={{ padding: "1rem" }} >Aromatic bar</Typography>
            </Box>

            {/* feedback form */}
            
                <FeedbackForm handleUpdateData={handleUpdateData} />
        
        </div>
    )
}
