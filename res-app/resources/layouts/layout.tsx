import { Auth, NavLinks } from '@/types';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';
export default function Layout({
    children,
}: React.FragmentProps): React.ReactElement {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const auth = usePage<{ auth: Auth }>().props.auth;

    const navItems: NavLinks[] = [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Login', href: '/login' },
    ];
    return (
        <main>
            <header className="bg-transparent text-white">
                <nav className="border-gray-200 bg-white dark:bg-gray-900">
                    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                        {/* Logo */}
                        <a
                            href="/"
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                        >
                            <img
                                src="https://flowbite.com/docs/images/logo.svg"
                                className="h-8"
                                alt="Flowbite Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Flowbite
                            </span>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() =>
                                setIsOpen(!isOpen)
                            }
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-default"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">
                                Menu principale
                            </span>
                            <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>

                        {/* Navigation Links */}
                        <div
                            className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
                            id="navbar-default"
                        >
                            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
                                {navItems.map((item) => {
                                    const isLogout =
                                        item.name ===
                                            'Login' &&
                                        auth?.user;

                                    if (
                                        item.name ===
                                            'Dashboard' &&
                                        !auth?.user
                                    )
                                        return null;

                                    const baseClasses =
                                        'block rounded-sm px-3 py-2';
                                    const activeClasses =
                                        item.name ===
                                        'Dashboard'
                                            ? 'bg-blue-700 text-white md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500'
                                            : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500';

                                    return (
                                        <li key={item.href}>
                                            <a
                                                href={
                                                    item.href
                                                }
                                                className={`${baseClasses} ${activeClasses}`}
                                            >
                                                {isLogout
                                                    ? 'Logout'
                                                    : item.name}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            {children}
        </main>
    );
}
