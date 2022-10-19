import React, { Children } from "react";
import { ListaJogoHeader, ListaJogoTitle, ListaJogoTodos } from "./style";

interface ListaJogoProps {
  children: React.ReactNode;
}

function ListaJogo({ children }: ListaJogoProps) {
  return (
    <section>
        <ListaJogoTitle></ListaJogoTitle>
      <ListaJogoHeader>
        <ListaJogoTodos>{children}</ListaJogoTodos>
      </ListaJogoHeader>
    </section>
  );
}

export default ListaJogo;
