import { DashboardNavLinks } from '@/types';
import { UserRoundPen, UsersRound } from 'lucide-react';
import { useState } from 'react';
export function DashboardNav(): React.ReactElement {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const dashboardNavLinks: DashboardNavLinks[] = [
        {
            name: 'Résidents',
            href: '/citizens',
            icon: <UsersRound />,
        },
        {
            name: 'Profile',
            href: '/profile',
            icon: <UserRoundPen />,
        },
    ];
    return (
        <aside className="float-left min-h-screen w-28 overflow-hidden bg-amber-700 transition-[width] duration-500 ease-in-out hover:w-80">
            <nav className="px-10 py-6">
                <a
                    href="/"
                    className="center flex space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-8"
                        alt="Flowbite Logo"
                    />
                </a>
                <ul>
                    {dashboardNavLinks.map(
                        (item, index) => {
                            return (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="flex items-center space-x-3 rtl:space-x-reverse"
                                    >
                                        {item.icon}
                                        <span className="self-center text-xl font-semibold whitespace-nowrap hover:block dark:text-white">
                                            {item.name}
                                        </span>
                                    </a>
                                </li>
                            );
                        },
                    )}
                </ul>
            </nav>
        </aside>
    );
}
