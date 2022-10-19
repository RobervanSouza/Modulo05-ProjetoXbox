import JogoItem from "components/JogoItem/JogoItem";
import ListaJogo from "components/TodosJogo/listaJogo";

import React, { Children } from "react";
function Banner() {
    return (
      <ListaJogo>
        <JogoItem />
      </ListaJogo>
    );
}
export default Banner;
