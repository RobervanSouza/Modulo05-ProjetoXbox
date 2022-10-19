
import React from 'react'
import { JogoItem1, JogoItemDescription, JogoItemImage, JogoItemName, JogoItemPrice } from "./styles";

function JogoItem() {
  return (
    <JogoItem1>
      <JogoItemImage src="" />
      <JogoItemName> nome do jogo</JogoItemName>
      <JogoItemPrice> anos</JogoItemPrice>
      <JogoItemDescription>descrição</JogoItemDescription>
    </JogoItem1>
  );
}

export default JogoItem;


