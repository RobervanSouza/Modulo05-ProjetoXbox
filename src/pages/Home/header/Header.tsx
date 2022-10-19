import React, { useEffect, useState } from "react";
import { Cabecalho, ImgLogo, Pagina } from "./style";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <header className={`${isScrolled && 'bg-red-500'}`}>
      <Pagina>
        <header>
          <Cabecalho>
            <ImgLogo
              src="https://i.pinimg.com/736x/bf/21/de/bf21deeef128ed67160f9fddd520036b.jpg"
              alt=""
            />
            <ul>
              <li className="linkHeader">Home</li>
              <li className="linkHeader">Jogos</li>
              <li className="linkHeader">Minha Lista</li>
              <li className="linkHeader">Populares</li>
            </ul>
          </Cabecalho>
          <div></div>
        </header>
      </Pagina>
    </header>
  );
}

export default Header;
