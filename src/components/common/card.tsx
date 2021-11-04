import React from "react";

export const Card = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className: string;
}) => (
  <div
    className={`w-screen h-screen bg-gray-100 md:w-3/4 lg:w-2/3 md:h-2/3  p-10 m-5 rounded-xl shadow-xl outline-none  ${className}`}
    {...props}
  >
    {children}
  </div>
);
