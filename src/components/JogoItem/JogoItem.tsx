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
        <Iframe
          url="http://www.youtube.com/embed/xDMP3i36naA"
          position="absolute"
          width="100%"
          
          id="myId"
          className="myClassname"
          height="100%"
          styles={{ height: "455px" }}
        />
      </JogoItemDescription>
    </JogoItem1>
  );
}

export default JogoItem;
