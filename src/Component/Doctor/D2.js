
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';

export default function DoctorBackdrop2({ email, domain }) {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <button style={{ marginTop: "5px", backgroundColor: "white" }} className='book-now-btn' onClick={handleOpen}>Contact</button>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <div>
                    <p>Email: {email}</p>

                    <p>Website: {domain}</p>
                </div>
            </Backdrop>
        </div>
    );
}