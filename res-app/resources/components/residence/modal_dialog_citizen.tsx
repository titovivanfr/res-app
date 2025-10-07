import { CivilityEnum } from '@/js/types/enum/civility.enum';
import { GendreEnum } from '@/js/types/enum/gendre.enum';
import {
    DialogContent,
    FormControl,
    FormGroup,
    Input,
    InputLabel,
    MenuItem,
    Select,
} from '@mui/material';

export default function ModalDialogCitizen() {
    const textColor = '#537791';
    const borderColor = '#c1c0b9';

    const inputStyles = {
        color: textColor,
        '&:hover:not(.Mui-disabled)::before': {
            borderBottom: `1px solid ${borderColor}`,
        },
        '&::before': {
            borderBottom: `1px solid ${borderColor}`,
        },
        '&::after': {
            borderBottom: `1px solid ${borderColor}`,
        },
        '&.Mui-focused::after': {
            borderBottom: `1px solid ${borderColor}`,
        },
    };

    const labelStyles = {
        color: textColor,
        '&.Mui-focused': { color: textColor },
    };

    const getSelectStyles = () => ({
        '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor },
            '&:hover fieldset': { borderColor: textColor },
            '&.Mui-focused fieldset': {
                borderColor: textColor,
            },
            '& .MuiInputBase-input': { color: textColor },
        },
        '& .MuiInputLabel-root': labelStyles,
        '& .MuiFormHelperText-root': { color: textColor },
    });

    const selectFields = [
        {
            id: 'civility',
            label: 'Civilité',
            options: Object.values(CivilityEnum),
            helper: 'Veuillez sélectionner la civilité',
            labelId: 'civility-label',
        },
        {
            id: 'genre',
            label: 'Genre',
            options: Object.values(GendreEnum),
            helper: 'Veuillez sélectionner le genre',
            labelId: 'genre-label',
        },
    ];

    const textFields = [
        { id: 'last_name', label: 'Nom' },
        { id: 'using_name', label: "Nom d'usage" },
        { id: 'first_name', label: 'Prénom' },
        { id: 'email', label: 'Email', type: 'email' },
        { id: 'phone', label: 'Téléphone', type: 'tel' },
        { id: 'apartment', label: 'Appartment' },
    ];

    return (
        <DialogContent className="m-w-25vw">
            <form className="flex w-full flex-col gap-6">
                <FormGroup
                    className="flex justify-between"
                    row
                >
                    <FormControl sx={{ width: '48%' }}>
                        <InputLabel id="civility-label">
                            Civilité
                        </InputLabel>
                        <Select
                            labelId="civility-label"
                            id="civility"
                            label="Civilité"
                            defaultValue=""
                            // onChange={handleChange}
                        >
                            {Object.values(
                                CivilityEnum,
                            ).map((value) => (
                                <MenuItem
                                    key={value}
                                    value={value}
                                    sx={{
                                        color: textColor,
                                    }}
                                >
                                    {value}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl sx={{ width: '48%' }}>
                        <InputLabel id="Genre-label">
                            Genre
                        </InputLabel>
                        <Select
                            labelId="Genre-label"
                            id="Genre"
                            label="Genre"
                            defaultValue=""
                            // onChange={handleChange}
                        >
                            {Object.values(GendreEnum).map(
                                (value) => (
                                    <MenuItem
                                        key={value}
                                        value={value}
                                        sx={{
                                            color: textColor,
                                        }}
                                    >
                                        {value}
                                    </MenuItem>
                                ),
                            )}
                        </Select>
                    </FormControl>
                    {/* {selectFields.map(
                        ({
                            id,
                            label,
                            options,
                            helper,
                        }) => (
                            <FormControl
                                sx={{ width: '48%' }}
                                key={id}
                            >
                                <TextField
                                    id={id}
                                    select
                                    defaultValue={
                                        options[0]
                                    }
                                    label={label}
                                    helperText={helper}
                                    sx={getSelectStyles()}
                                >
                                    {options.map(
                                        (value) => (
                                            <MenuItem
                                                key={value}
                                                value={
                                                    value
                                                }
                                                sx={{
                                                    color: textColor,
                                                }}
                                            >
                                                {value}
                                            </MenuItem>
                                        ),
                                    )}
                                </TextField>
                            </FormControl>
                        ),
                    )} */}
                </FormGroup>

                {textFields.map(
                    ({ id, label, type = 'text' }) => (
                        <FormControl
                            fullWidth
                            key={id}
                        >
                            <InputLabel
                                htmlFor={id}
                                sx={labelStyles}
                            >
                                {label}
                            </InputLabel>
                            <Input
                                id={id}
                                type={type}
                                sx={inputStyles}
                            />
                        </FormControl>
                    ),
                )}
            </form>
        </DialogContent>
    );
}
