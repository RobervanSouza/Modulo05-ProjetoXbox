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
  JogoItemTreiler
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
      <JogoItemDescription>Descrição: {product.description}</JogoItemDescription>
      <JogoItemCategoria>Categoria: {product.categoria}</JogoItemCategoria>
      <JogoItemAno>Ano do Jogo: {product.ano}</JogoItemAno>
      <JogoItemGamePlay>Game Play: {product.gameplay}</JogoItemGamePlay>
      <JogoItemTreiler>Trailer: {product.treiler}</JogoItemTreiler>
      <JogoItemScore>Score: {product.score}</JogoItemScore>
       fd495cbd13f7ed122e46c40aaef37b27c7372225
    </JogoItem1>

  );
}

export default JogoItem;
