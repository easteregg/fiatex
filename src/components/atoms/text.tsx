import React from 'react';

type TTextProps = {
    className: string;
    children: React.ReactNode;
}
const Text = ({ className, children }: TTextProps) => {
    return <p className={`text-2xl font-bold ${className}`}>{children}</p>
}

export { Text };