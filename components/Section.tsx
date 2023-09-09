import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Section = ({ children, className, id }: Props) => {
  return (
    <section
      className={`relative flex items-center justify-center min-h-[20rem] py-20 ${className}`}
      id={id}
    >
      <div className="w-10/12 mx-auto">{children}</div>
    </section>
  );
};

export default Section;
