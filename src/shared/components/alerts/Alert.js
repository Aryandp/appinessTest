

import { Paper, Snackbar } from '@material-ui/core';
import { CheckCircle, Close } from '@material-ui/icons';
import React, { useState } from 'react';

export default function Alert(props) {

    const [open, setOpen] = useState(true);

    // to close the snackbar
    const handleClose = () => {
        // if we want to handle close from parent component & do some logic after that.
        props.open !== undefined ? props.handleClose() : setOpen(false);
    };

    return (
        <div>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={props.open !== undefined ? props.open : open}
                autoHideDuration={props.duration}
                onClose={handleClose}
            >
                <Paper className={`snackbar snackbar-${props.color}`}>
                    <CheckCircle /><span>{props.message}</span><Close onClick={handleClose} className={`snackbar-close-${props.color}`} />
                </Paper>
            </Snackbar>
        </div>
    );
}
