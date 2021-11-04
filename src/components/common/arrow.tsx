import React from 'react';

type TArrowProps = {
    className?: string;
}
export const Arrow = ({ className }: TArrowProps) => (
    <svg
        className={`h-6 w-6 text-gray-500 transform rotate-270 ${className} `}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
    </svg>
);
