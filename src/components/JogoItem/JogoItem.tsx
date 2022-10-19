import Iframe from "react-iframe";
import React from "react";
import {
  JogoItem1,
  JogoItemDescription,
  JogoItemImage,
  JogoItemName,
  JogoItemPrice,
} from "./styles";

function JogoItem() {
  return (
    <JogoItem1>
      <JogoItemImage></JogoItemImage>
      <JogoItemName> nome do jogo</JogoItemName>
      <JogoItemPrice> anos</JogoItemPrice>
      <JogoItemDescription>
        
     
      </JogoItemDescription>
    </JogoItem1>
    
  );
}

export default JogoItem;
