import { ModalInterface } from '@/js/types/modal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import React, { ReactElement } from 'react';
import DialogBtn from './dialog_btn';

export default function ModalDialog({
    open,
    setOpen,
    submitFn,
    children,
}: ModalInterface): ReactElement {
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(
            (formData as any).entries(),
        );
        const email = formJson.email;
        console.log(email);
        handleClose();
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
            >
                {children}
                <DialogActions>
                    <DialogBtn
                        handlerFn={handleClose}
                        title="Fermer"
                        type="button"
                    />
                    <DialogBtn
                        handlerFn={handleClose}
                        title="Ajouter"
                        type="button"
                    />
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
