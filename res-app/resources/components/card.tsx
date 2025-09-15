import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}
export default function Card({
    children,
    className,
}: CardProps): React.ReactElement {
    return (
        <div
            className={`size-max rounded-lg bg-first shadow-md ${className ?? ''}`}
        >
            {' '}
            {children}
        </div>
    );
}
