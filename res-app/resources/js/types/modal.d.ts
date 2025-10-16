export interface ModalInterface {
    open: boolean;
    setOpen: (value: boolean) => void;
    onSubmit: (e: any) => void;
    children: React.ReactElement;
}
