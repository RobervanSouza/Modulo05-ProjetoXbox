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
        Game Play
        <div>
          <A href={product.gameplay} target="_blank">
            {" "}
            <Button type="button">
              {" "}
              <img
                src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-5-2.png"
                height="35"
                width="60"
              />
            </Button>{" "}
          </A>
        </div>
      </JogoItemGamePlay>
      <JogoItemTreiler>
        Tailer
        <div>
          <A href={product.treiler} target="_blank">
            {" "}
            <Button type="button">
              {" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNlLKEWZjqivasptSTg9q4RwF-TD-pGpSPhqYCT21CA6pVHbQN4ly5C5DPlGY--KkbfNw&usqp=CAU"
                height="35"
                width="60"
              />
            </Button>{" "}
          </A>
        </div>
      </JogoItemTreiler>
      <JogoItemScore>Score: {product.score}</JogoItemScore>
    </JogoItem1>
  );
}

export default JogoItem;
