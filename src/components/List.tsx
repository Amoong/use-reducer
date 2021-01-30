import React, { ReactNode } from "react";

interface IListProps {
  name: string;
  children: ReactNode;
}

function List({ name, children }: IListProps) {
  return (
    <>
      <h1>{name}</h1>
      <ul>{children}</ul>
    </>
  );
}

export default List;
