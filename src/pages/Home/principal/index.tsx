import JogoItem from "components/JogoItem/JogoItem";
import ListaJogo from "components/TodosJogo/listaJogo";
import Banner from "pages/Banner/Baner";
import Header from "../header/Header";
import { Home1 } from "./style";

  

const Home = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 lg:h-[140vh] ">
      <Header />
      <main className="h-40 space-y-0.5">
        <ListaJogo>
          <JogoItem />
        </ListaJogo>
        <section>
          {/* ação*/}
          {/* aventura */}
          {/* guerra */}
          {/* mmo*/}
          {/* minha lista*/}
        
        </section>
      </main>
      {/* modal */}
    </div>
  );
};
export default Home;
