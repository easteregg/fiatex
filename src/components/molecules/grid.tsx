import React from "react";


export const Grid = ({ children, className, ...props }: { children: React.ReactNode, className?: string}) => (
    <div
        data-testid="grid"
        className={`w-screen h-screen flex flex-col items-center justify-center `}
        {...props}
    >
        {children}
    </div>
);