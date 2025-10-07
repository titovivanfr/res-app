export interface ModalInterface {
    open: boolean;
    setOpen: (value: boolean) => void;
    submitFn: () => void;
    children: React.ReactElement;
}
