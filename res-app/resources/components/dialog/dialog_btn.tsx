import { Button } from '@mui/material';
import React from 'react';
interface DialogBtnProps {
    handlerFn: () => void;
    type?: 'button' | 'submit' | 'reset';
    form?: string;
    title: string;
}
export default function DialogBtn({
    handlerFn,
    type = 'button',
    form,
    title,
}: DialogBtnProps): React.ReactElement {
    const colorFouth = '#537791';
    const colorSecond = '#f7f6e7';

    const styles = {
        color: colorFouth,
        '&:hover': {
            color: colorSecond,
            backgroundColor: colorFouth,
        },
        fontWeight: 'medium',
    };
    return (
        <React.Fragment>
            <Button
                onClick={handlerFn}
                sx={styles}
                type={type}
                form={form}
            >
                {title}
            </Button>
        </React.Fragment>
    );
}
