import { LogOut, Pin, PinOff } from 'lucide-react';
import { useState } from 'react';
import { NavItems } from './nav_items';
export function DashboardNav(): React.ReactElement {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <aside
            className={`group relative float-left h-full ${isOpen ? 'w-50' : 'w-28'} overflow-hidden bg-third transition-[width] duration-500 ease-in-out hover:w-50`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`absolute right-0 m-2 cursor-pointer rounded-lg p-1 text-second hover:bg-fourth ${isOpen ? 'bg-fourth' : null}`}
            >
                {isOpen ? (
                    <PinOff size={20} />
                ) : (
                    <Pin size={20} />
                )}
            </button>
            <nav className="mt-2 flex h-full flex-col justify-between p-4">
                <a
                    href="/"
                    className="flex items-center space-x-3"
                >
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-8"
                        alt="Flowbite Logo"
                    />
                    <span
                        className={`${isOpen ? 'block' : 'hidden'} text-xl font-bold text-second group-hover:block`}
                    >
                        Flowbite
                    </span>
                </a>
                <NavItems isOpen={isOpen} />
                <a
                    href="/logout"
                    className="flex items-center space-x-3 p-2 text-second hover:bg-fourth"
                >
                    <span>
                        <LogOut size={28} />
                    </span>
                    <span
                        className={`${isOpen ? 'block' : 'hidden'} text-lg group-hover:block`}
                    >
                        Déconnexion
                    </span>
                </a>
            </nav>
        </aside>
    );
}
