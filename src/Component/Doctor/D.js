import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';

export default function DoctorBackdrop({contact}) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <button className='book-now-btn' onClick={handleOpen}>Book Your sloat</button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
      <p>Phone No: {contact}</p>
      </Backdrop>
    </div>
  );
}