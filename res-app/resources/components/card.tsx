import React from 'react';

interface CardProps {
    children: React.ReactNode;
}
export default function Card({ children }: CardProps) {
    return (
        <div className="rounded-lg bg-first p-4 shadow-md">
            {children}
        </div>
    );
}
