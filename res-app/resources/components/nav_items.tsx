import { DashboardNavLinks } from '@/types';
import { UserRoundPen, UsersRound } from 'lucide-react';
interface NavItemsProps {
    isOpen: boolean;
}
export function NavItems({
    isOpen,
}: NavItemsProps): React.ReactElement {
    const links: DashboardNavLinks[] = [
        {
            name: 'Résidents',
            href: '/citizens',
            icon: <UsersRound size={28} />,
        },
        {
            name: 'Profile',
            href: '/profile',
            icon: <UserRoundPen size={28} />,
        },
    ];
    return (
        <ul className="flex flex-col gap-4">
            {links.map((item, index) => (
                <li
                    key={index}
                    className="flex cursor-pointer items-center p-2 hover:bg-fourth"
                >
                    <a
                        href={item.href}
                        className="me-2 flex items-center space-x-3 text-second"
                    >
                        {item.icon}
                    </a>
                    <span
                        className={`${isOpen ? 'block' : 'hidden'} pb-0 text-lg text-second group-hover:block`}
                    >
                        {item.name}
                    </span>
                </li>
            ))}
        </ul>
    );
}
