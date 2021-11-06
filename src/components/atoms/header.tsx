import React from "react";

type THeaderProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode,
};
export const Header = ({ level, children }: THeaderProps) => {
  const Element = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Element className="text-3xl text-blue-800 font-black">
      {children}
    </Element>
  );
};
