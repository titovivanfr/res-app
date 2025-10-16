import { GendreEnum } from './enum/gendre.enum';
import { UserTypeEnum } from './enum/userType.enum';

export interface TableRow {
    apartment: string;
    birthday: string;
    civility: string;
    email: string;
    first_name: string;
    genre: GendreEnum;
    id?: string;
    last_name: string;
    phone: string;
    user_type?: UserTypeEnum;
    using_name: string;
}
