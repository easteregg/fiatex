import React from "react";

export const Card = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`grid bg-gray-100 p-10 m-5 rounded-xl shadow-xl outline-none  ${className}`}
    {...props}
  >
    {children}
  </div>
);
