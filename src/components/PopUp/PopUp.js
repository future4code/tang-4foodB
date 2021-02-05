import React from 'react';
import {Dialog, DialogTitle, DialogContent} from '@material-ui/core';

export default function PopUp (props) {
    const { children, openPopup, setOpenPopup} = props;
    return (
        <Dialog open={openPopup}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}