import {JogosItem} from "components/JogoItem/JogoItem";
import { Jogos } from "components/TodosJogos/Interface";
import { products } from "mock/JogosItens";
import React, { Children, useState } from "react";
import { getEnabledCategories } from "trace_events";
import { Button, Card, Categoria, ListaJogoHeader, ListaJogoTitle, ListaJogoTodos, } from "./style";

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
      <ListaJogoTitle>
        <div>
          <Categoria>
            <Button
              onClick={() => {
                definirProdutos(products);
              }}
              >
              {" "}
              Todos {" "}
            </Button>
            <Button
              onClick={() => {
                filtrarPorCategoria("luta");
              }}
              >
              {" "}
              luta{" "}
            </Button>
            <Button
              onClick={() => {
                filtrarPorCategoria("Ação");
              }}
              >
              {" "}
              Ação{" "}
            </Button>
            <Button
              onClick={() => {
                filtrarPorCategoria("corrida");
              }}
              >
              {" "}
              corrida{" "}
            </Button>

            <Button
              onClick={() => {
                filtrarPorCategoria("futebol");
              }}
              >
              {" "}
              futebol{" "}
            </Button>

            <Button
              onClick={() => {
                filtrarPorCategoria("Guerra");
              }}
              >
              {" "}
              Guerra{" "}
            </Button>

            </Categoria>
            {
              <div>
                <Card>
                  {produtos.map((products) => (
                    <div>
                      <JogosItem product={products} onSelect={handleSelection} />
                    </div>
                  ))}
                </Card>
              </div>
            }
        </div>
      </ListaJogoTitle>
            </ListaJogoHeader>

    </section>
  );
}

export default ListaJogo;


 




/*<Teste>
<Button
  onClick={() => {
    filtrarPorCategoria("Resultado de Pesquisa");
  }}
>
  {" "}
  Resultado de Pesquisa
  {<div>
    <Card>
      {produtos.map((products) => (
        <div>
          <JogoItem product={products} onSelect={handleSelection} />
        </div>
      ))}
    </Card>
  </div> }
  
</Button>
</Teste>*/