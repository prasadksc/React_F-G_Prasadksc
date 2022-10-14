import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ViewDetails({ open, handleClose, userDetail }) {

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open ?? false}
        fullWidth
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography variant="h4" align="center" fontWeight={'bold'}>User Feedback</Typography>
        </BootstrapDialogTitle>
        <DialogContent >
          <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
            <Typography marginBottom={2} variant='h6' fontWeight={'lighter'}>
              Customer Name : {userDetail.customerName}
            </Typography>
            <Typography marginBottom={2} variant='h6' fontWeight={'lighter'}>
              Email : {userDetail.email}
            </Typography>
            <Typography marginBottom={2} variant='h6' fontWeight={'lighter'}>
              Phone : {userDetail.phone}
            </Typography>
            <Typography marginBottom={2} variant='h6' fontWeight={'lighter'}>
              Service Quality : {userDetail.service_quality}
            </Typography>
            <Typography marginBottom={2} variant='h6' fontWeight={'lighter'}>
              Beverage Quality : {userDetail.beverage_quality}
            </Typography>
            <Typography marginBottom={2} variant='h6' fontWeight={'lighter'}>Hygenie : {userDetail.hygenie}</Typography>
            <Typography marginBottom={2} variant='h6' fontWeight={'lighter'}>Dining Experience : {userDetail.dining_exp}</Typography>
          </div>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
