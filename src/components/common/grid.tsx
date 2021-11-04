import React from "react";


export const Grid = ({ children, className, ...props }: { children: React.ReactNode, className?: string}) => (
    <div
        className={`w-screen h-screen flex items-center justify-center `}
        {...props}
    >
        {children}
    </div>
);