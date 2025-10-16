import { User } from '../types';

export default function validationCitizen(
    user: User,
    setErrors: React.Dispatch<
        React.SetStateAction<Record<string, string>>
    >,
): boolean {
    const newErrors: Record<string, string> = {};

    if (!user.last_name)
        newErrors.last_name = 'Nom est requis';
    if (!user.first_name)
        newErrors.first_name = 'Prénom est requis';
    if (!user.email) newErrors.email = 'Email est requis';
    else if (!/\S+@\S+\.\S+/.test(user.email))
        newErrors.email = 'Email invalide';
    if (!user.civility)
        newErrors.civility = 'Civilité est requise';
    if (!user.genre) newErrors.genre = 'Genre est requis';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
}
