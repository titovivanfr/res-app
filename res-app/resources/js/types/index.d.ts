import type { Config } from 'ziggy-js';
import { CivilityEnum } from './enum/civility.enum';
import { GendreEnum } from './enum/gendre.enum';
import { UserTypeEnum } from './enum/userType.enum';

export interface Auth {
    user: User;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    [key: string]: unknown;
}

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    using_name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    apartment: string;
    birthday: string;
    civility: CivilityEnum;
    genre: GendreEnum;
    phone: string;
    user_type: UserTypeEnum;
    // [key: string]: unknown; // This allows for additional properties...
}

export interface NavLinks {
    name: string;
    href: string;
}
