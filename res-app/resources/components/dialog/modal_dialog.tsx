import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { ReactElement } from 'react';
import DialogBtn from '../dialog/dialog_btn';
interface ModalInterface {
    open: boolean;
    setOpen: (v: boolean) => void;
    handleSubmit?: (
        event: React.FormEvent<HTMLFormElement>,
    ) => void;
    children?: React.ReactNode;
}

export default function ModalDialog({
    open,
    setOpen,
    handleSubmit,
    children,
}: ModalInterface): ReactElement {
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            fullWidth
        >
            <form onSubmit={handleSubmit}>
                <DialogContent className="m-w-25vw flex w-full flex-col gap-6">
                    {children}
                </DialogContent>
                <DialogActions>
                    <DialogBtn
                        handleBtn={() => setOpen(false)}
                        title="Fermer"
                        type="button"
                    />
                    <DialogBtn
                        title="Ajouter"
                        type="submit"
                    />
                </DialogActions>
            </form>
        </Dialog>
    );
}
