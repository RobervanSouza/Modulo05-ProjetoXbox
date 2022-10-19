import JogoItem from "components/JogoItem/JogoItem";
import { Jogos } from "components/TodosJogos/Interface";
import { products } from "mock/JogosItens";
import React, { Children, useState } from "react";
import { getEnabledCategories } from "trace_events";
import { Card, ListaJogoHeader, ListaJogoTitle, ListaJogoTodos } from "./style";

interface ListaJogoProps {
  children: React.ReactNode;
}

function ListaJogo({ children }: ListaJogoProps) {
  const [produtos, definirProdutos] = useState(products);
  const handleSelection = (product: Jogos) => {};
  function filtrarPorCategoria(categoria: any) {
    const resultadoDoFiltro = products.filter(
      (product) => product.categoria === categoria
    );

    definirProdutos(resultadoDoFiltro);
  }
  return (
    <section>
          <ListaJogoHeader>
            <ListaJogoTodos>{children}</ListaJogoTodos>
          </ListaJogoHeader>
      <ListaJogoTitle>
        <div>
          <button
            onClick={() => {
              filtrarPorCategoria("Guerra");
            }}
          >
            {" "}
            Guerra{" "}
          </button>
          <button
            onClick={() => {
              filtrarPorCategoria("acao");
            }}
          >
            {" "}
            acao{" "}
          </button>
          <button
            onClick={() => {
              filtrarPorCategoria("corrida");
            }}
          >
            {" "}
            corrida{" "}
          </button>
          <button
            onClick={() => {
              filtrarPorCategoria("luta");
            }}
          >
            {" "}
            luta{" "}
          </button>
          <button
            onClick={() => {
              filtrarPorCategoria("futebol");
            }}
          >
            {" "}
            futebol{" "}
          </button>
        </div>
      </ListaJogoTitle>
      <div>
        <Card>
          {produtos.map((products) => (
            <div>
              <JogoItem product={products} onSelect={handleSelection} />
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
}

export default ListaJogo;
