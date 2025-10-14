import { User } from '@/js/types';
import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { CivilityEnum } from '../types/enum/civility.enum';
import { GendreEnum } from '../types/enum/gendre.enum';
interface useDialogCitizenHookProps {
    user: User | null;
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
    };
}
