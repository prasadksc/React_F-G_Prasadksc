import React, { useState } from 'react'
import TableDetails from '../Interface/TableDetails';
import { Box, Button } from '@mui/material';



export default function Table({ userData, handleDelete, handleSearch, currentSearch }) {
  const [selectedRows, setSelectedRows] = useState([])


  return (

    <Box sx={{ width: '100%' }}>

      <TableDetails userData={userData} selectedRows={selectedRows} setSelectedRows={setSelectedRows} handleSearch={handleSearch} currentSearch={currentSearch} />
      <Button variant="contained" onClick={() => handleDelete(selectedRows)} sx={{ textTransform: 'none', backgroundColor: '#f06292', marginTop: '3', ":hover": { background: '#f06292' }, float: 'right', marginRight: '1.7rem' }} size='large'>Delete</Button>
    </Box>

  )
}

