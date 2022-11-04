import { auth}  from "./Auth";
import { usuarios}  from "./Usuarios";
import { jogos}  from "./Jogos";


export const endpoint = {
  baseUrl: "https://xbox-jogo.herokuapp.com",
  ...jogos,
  ...usuarios,
  ...auth,
};
