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
    id?: string;
    first_name: string;
    last_name: string;
    using_name: string;
    email: string;
    email_verified_at?: string | null;
    created_at?: string;
    updated_at?: string;
    apartment: string;
    birthday: string;
    civility: CivilityEnum;
    genre: GendreEnum;
    phone: string;
    user_type?: UserTypeEnum;
}

export interface NavLinks {
    name: string;
    href: string;
}

export interface DashboardNavLinks {
    name: string;
    href: string;
    icon: react.RefAttributes<SVGSVGElement>;
}

export interface ResidenceIntreface {
    city: string;
    country: string;
    id: number;
    number: string;
    postal_code: string;
    street: string;
    user_id: number;
    way: string;
}
