import {Jogos} from "../../components/TodosJogos/Interface"
import React from "react";
import {
  JogoItem1,
  JogoItemDescription,
  JogoItemImage,
  JogoItemName,
  JogoItemCategoria,
  JogoItemAno,
  JogoItemScore,
  JogoItemGamePlay,
  JogoItemTreiler,
  
  A,
  Button
} from "./styles";
import { products } from "mock/JogosItens";
type JogoItemProps = {
       product: Jogos
       onSelect:(data: Jogos) => void
}

function JogoItem({product, onSelect}: JogoItemProps) {
  return (

    <JogoItem1 role="listitem">
      <JogoItemImage src={product.image} />
      <JogoItemName>{product.name}</JogoItemName>
      <JogoItemDescription>
        Descrição: {product.description}
      </JogoItemDescription>
      <JogoItemCategoria>Categoria: {product.categoria}</JogoItemCategoria>
      <JogoItemAno>Ano do Jogo: {product.ano}</JogoItemAno>
      <JogoItemGamePlay>
        <div>
          <A href={product.gameplay} target="_blank">
            {" "}
            <Button type="button"> Game Play</Button>{" "}
          </A>
        </div>
      </JogoItemGamePlay>
      <JogoItemTreiler>
        <div>
          <A href={product.gameplay} target="_blank">
            {" "}
            <Button>Trayller</Button>{" "}
          </A>
        </div>
      </JogoItemTreiler>
      <JogoItemScore>Score: {product.score}</JogoItemScore>
    </JogoItem1>

  );
}

export default JogoItem;
