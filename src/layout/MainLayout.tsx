import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="MainLayout">
        <h1> Crehana </h1>
      <div className="view">{children}</div>
    </div>
  );
}

