import { User } from '@/js/types';
import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { CivilityEnum } from '../types/enum/civility.enum';
import { GendreEnum } from '../types/enum/gendre.enum';
interface useDialogCitizenHookProps {
    user?: User;
}

export default function useDialogCitizenHook({
    user,
}: useDialogCitizenHookProps): {
    formData: Partial<User>;
    setFormData: React.Dispatch<
        React.SetStateAction<Partial<User>>
    >;
    handleInputChange: (
        event: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >,
    ) => void;
    handleSelectChange: (
        event: SelectChangeEvent<string>,
    ) => void;
    errors: Record<string, string>;
    setErrors: React.Dispatch<
        React.SetStateAction<Record<string, string>>
    >;
} {
    const [formData, setFormData] = useState<Partial<User>>(
        {
            first_name: user?.first_name ?? '',
            last_name: user?.last_name ?? '',
            using_name: user?.using_name ?? '',
            email: user?.email ?? '',
            phone: user?.phone ?? '',
            apartment: user?.apartment ?? '',
            civility: user?.civility ?? CivilityEnum.MR,
            genre: user?.genre ?? GendreEnum.MAN,
            birthday: user?.birthday ?? '',
        },
    );
    const [errors, setErrors] = useState<
        Record<string, string>
    >({});
    const handleInputChange = (
        event: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >,
    ): void => {
        const { name, value } = event.target;
        if (!name) return;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSelectChange = (
        event: SelectChangeEvent<string>,
    ): void => {
        const { name, value } = event.target;
        if (!name) return;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    return {
        formData,
        setFormData,
        handleInputChange,
        handleSelectChange,
        errors,
        setErrors,
    };
}
