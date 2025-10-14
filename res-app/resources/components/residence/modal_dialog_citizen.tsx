import useDialogCitizenHook from '@/js/hooks/useDialogCitizenHook';
import { User } from '@/js/types';
import { CivilityEnum } from '@/js/types/enum/civility.enum';
import { GendreEnum } from '@/js/types/enum/gendre.enum';
import { UserTypeEnum } from '@/js/types/enum/userType.enum';
import {
    DialogContent,
    FormControl,
    FormGroup,
    Input,
    InputLabel,
    MenuItem,
    Select,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

interface ModalDialogCitizenProps {
    user: User | null;
    onSubmit: (user: User) => void;
}
export default function ModalDialogCitizen({
    user,
    onSubmit,
}: ModalDialogCitizenProps): React.ReactElement {
    const {
        formData,
        handleInputChange,
        handleSelectChange,
    } = useDialogCitizenHook({ user });
    const textColor = '#537791';
    const borderColor = '#c1c0b9';
const commonFieldStyles = {
    color: textColor,
    '& .MuiInputBase-root, & .MuiInput-root, & .MuiOutlinedInput-root': {
        color: textColor,
        borderColor: borderColor,
        '& fieldset': {
            borderColor: borderColor,
        },
        '&:hover fieldset': {
            borderColor: borderColor,
        },
        '&.Mui-focused fieldset': {
            borderColor: borderColor,
        },
    },
    '& .MuiInput-underline:before': {
        borderBottom: `1px solid ${borderColor}`,
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottom: `1px solid ${borderColor}`,
    },
    '& .MuiInput-underline:after': {
        borderBottom: `1px solid ${borderColor}`,
    },
    '& .MuiSvgIcon-root': {
        color: textColor,
    },
    '& .MuiInputLabel-root': {
        color: textColor,
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: textColor,
    },
};
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
    const selectStyles = {
        color: textColor,
        '& .MuiInputBase-root': {
            color: textColor,
        },
        '& .MuiSelect-select': {
            borderBottom: `1px solid ${borderColor}`,
            '&:focus': {
                borderBottom: `1px solid ${borderColor}`,
            },
            '&:hover': {
                borderBottom: `1px solid ${borderColor}`,
            },
        },
        '& .MuiSvgIcon-root': {
            color: textColor,
        },
        '& .MuiInput-underline:before': {
            borderBottom: `1px solid ${borderColor}`,
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before':
            {
                borderBottom: `1px solid ${borderColor}`,
            },
        '& .MuiInput-underline:after': {
            borderBottom: `1px solid ${borderColor}`,
        },
    };

    const labelStyles = {
        color: textColor,
        '&.Mui-focused': { color: textColor },
    };
    const textFields: {
        id: keyof Pick<
            User,
            | 'last_name'
            | 'using_name'
            | 'first_name'
            | 'email'
            | 'phone'
            | 'apartment'
        >;
        label: string;
        type?: string;
    }[] = [
        { id: 'last_name', label: 'Nom' },
        { id: 'using_name', label: "Nom d'usage" },
        { id: 'first_name', label: 'Prénom' },
        { id: 'email', label: 'Email', type: 'email' },
        { id: 'phone', label: 'Téléphone', type: 'tel' },
        { id: 'apartment', label: 'Appartement' },
    ];
    const formSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const userToSubmit: User = {
            id: user?.id ?? '',
            first_name: formData.first_name ?? '',
            last_name: formData.last_name ?? '',
            using_name: formData.using_name ?? '',
            email: formData.email ?? '',
            apartment: formData.apartment ?? '',
            birthday: formData.birthday ?? '',
            civility: formData.civility ?? CivilityEnum.MR,
            genre: formData.genre ?? GendreEnum.MAN,
            phone: formData.phone ?? '',
            user_type: UserTypeEnum.CITIZEN,
        };
        onSubmit(userToSubmit);
    };
    return (
        <DialogContent className="m-w-25vw">
            <form
                className="flex w-full flex-col gap-6"
                onSubmit={formSubmit}
            >
                <FormGroup
                    className="flex justify-between"
                    row
                >
                    <FormControl sx={{ width: '48%' }}>
                        <InputLabel
                            id="civility-label"
                            sx={labelStyles}
                        >
                            Civilité
                        </InputLabel>
                        <Select
                            labelId="civility-label"
                            id="civility"
                            label="Civilité"
                            name="civility"
                            value={formData.civility ?? ''}
                            sx={selectStyles}
                            onChange={handleSelectChange}
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
                        <InputLabel
                            id="Genre-label"
                            sx={labelStyles}
                        >
                            Genre
                        </InputLabel>
                        <Select
                            labelId="Genre-label"
                            id="Genre"
                            label="Genre"
                            name="genre"
                            value={formData.genre ?? ''}
                            sx={selectStyles}
                            onChange={handleSelectChange}
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
                                name={id}
                                value={formData[id] ?? ''}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                    ),
                )}
                <FormControl>
                    <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                    >
                        <DatePicker
                            name="birthday"
                            label="Anniversary"
                            sx={commonFieldStyles}
                        />
                    </LocalizationProvider>
                </FormControl>
            </form>
        </DialogContent>
    );
}
