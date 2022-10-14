
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbarContainer } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';
import SearchBar from '../forms/SearchBar';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewDetails from '../layouts/ViewDetails';
import { Link } from 'react-router-dom'




export default function TableDetails({ userData, setSelectedRows, selectedRows, handleSearch, currentSearch }) {

  const [open, setOpen] = useState(false)

  const [userDetail, setUserDetail] = useState({})


  const handleClose = () => {
    setOpen(false)
  }



  const columns = [
    {
      field: 'FormDetails',
      headerName: 'Form details',
      width: 170,
      renderCell: (props) => (
        <Button variant="text" sx={{ textTransform: 'none' }} size='small' onClick={() => { setOpen(true); setUserDetail(props.row) }}>
          View Details
        </Button>
      ),
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'customerName',
      headerName: 'Customer Name',
      width: 150,
      editable: true,
      sortable: false,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
      sortable: false,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 150,
      editable: true,
      sortable: false,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'service_quality',
      headerName: 'Please rate the quality of the service you received from your host',
      sortable: false,
      width: 435,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'beverage_quality',
      headerName: 'Please rate the quality of your beverage',
      sortable: false,
      width: 270,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'hygenie',
      headerName: 'Was our restaurant clean',
      sortable: false,
      width: 185,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'dining_exp',
      headerName: 'Please rate your overall dining experience',
      sortable: false,
      width: 285,
      headerAlign: 'center',
      align: 'center'
    },
  ];




  const TableToolbar = () => {
    return (
      <GridToolbarContainer>
        <Box sx={{ m: 2, flexGrow: '2' }}>
          <Typography variant='h5'>Aromatic bar</Typography>
          <Typography variant='p' sx={{ fontSize: '12px' }}>{userData.length} records. {selectedRows.length} filters applied</Typography>
        </Box>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box >
            <SearchBar handleChange={handleSearch} currentSearch={currentSearch}/>
            <Button variant='contained' sx={{ color: 'grey', backgroundColor: 'inherit', margin: '0 1.2rem 0 1.2rem', ":hover": { background: 'none' } }}>
              <RefreshIcon sx={{ color: 'GrayText' }} />
            </Button>
            <Link to="/" style={{ textDecoration: 'none' }}><Button variant="contained" color="success" sx={{ textTransform: 'none' }}>Add New</Button></Link>
          </Box>
        </div>
      </GridToolbarContainer>
    )

  }

  return (
    <Box sx={{ width: '100%', marginBottom: '1.5rem' }}>
      <ViewDetails open={open} handleClose={handleClose} userDetail={userDetail} />
      <DataGrid
        rows={userData}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        components={{
          Toolbar: TableToolbar
        }}
        autoHeight={true}
        onSelectionModelChange={(data) => setSelectedRows(data)}
        hideFooter
      />
    </Box>
  );
}


