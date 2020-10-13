import React from 'react'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button} from "@material-ui/core";

export const ConfirmDialog = ({open,children, handleClose,confirmModalAction, title}) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
            <Button onClick={()=>confirmModalAction()} color="primary">
                Confirm
            </Button>
            <Button onClick={handleClose} color="secondary" autoFocus>
                Cancel
            </Button>
            </DialogActions>
        </Dialog>
    )
}
