import JogoItem from "components/JogoItem/JogoItem";
import ListaJogo from "components/ListaJogos/listaJogo";
import { Jogos } from "components/TodosJogos/Interface";
import { products } from "mock/JogosItens";

import Header from "../header/Header";
import { Banner, Home1 } from "./style";

const Home = () => {
  const handleSelection = (product: Jogos)=>{}
  return (
    <Home1>
      <div className="relative h-screen bg-gradient-to-b from-gray-900/10 lg:h-[140vh] ">
        <Header />

        <main>
          <div className="card"> 
            <div className="Circle"></div>
            <div className="Circle2"></div>         
          </div>
          
          <Banner>
            <ListaJogo>
             
            </ListaJogo>
          </Banner>
          <section>
            
          </section>
        </main>
      </div>
    </Home1>
  );
};
export default Home;
