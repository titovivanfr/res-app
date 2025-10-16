import { Button } from '@mui/material';
import React from 'react';
interface DialogBtnProps {
    handleBtn?: () => void;
    type?: 'button' | 'submit' | 'reset';
    title: string;
}
export default function DialogBtn({
    handleBtn,
    type = 'button',
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
                onClick={handleBtn ? handleBtn : undefined}
                sx={styles}
                type={type}
            >
                {title}
            </Button>
        </React.Fragment>
    );
}
