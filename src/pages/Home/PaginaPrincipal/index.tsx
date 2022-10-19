import JogoItem from "components/JogoItem/JogoItem";
import ListaJogo from "components/ListaJogos/listaJogo";
import { Jogos } from "components/TodosJogos/Interface";
import { products } from "mock/JogosItens";

import Header from "../header/Header";
import { Home1 } from "./style";


const Home = () => {
  const handleSelection = (product: Jogos)=>{}
  return (
    <Home1>
      <div className="relative h-screen bg-gradient-to-b from-gray-900/10 lg:h-[140vh] ">
        <Header />

        <main className="h-40 space-y-0.5">
          <ListaJogo>
            {Boolean(products.length) &&
              products.map((product, index) =>(
               <JogoItem 
               product={product} 
               key={`teste ${index}`}
               onSelect={handleSelection}
               />
               ))}
          </ListaJogo>
          <section>
            {/* ação*/}
            {/* aventura */}
            {/* guerra */}
            {/* mmo*/}
            {/* minha lista*/}
          </section>
        </main>
      </div>
    </Home1>
  );
};
export default Home;
