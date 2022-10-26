import {
  Button,
  Icon,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { RoutePath } from "Router/routes";
import { ReactComponent as Logout } from "assets/icons/logout.svg";
import { Cabecalho, ImgLogo, Logout1, MenuItemLogout, Pagina } from "./style";
import { AuthProvider, useAuthContext } from "Auth/Context/AuthContext";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuthContext();

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
    <header className={`${isScrolled && "bg-red-500"}`}>
      <AuthProvider>
        
      <Pagina>
        <header>
          <Cabecalho>
            <ImgLogo
              src="https://i.pinimg.com/736x/bf/21/de/bf21deeef128ed67160f9fddd520036b.jpg"
              alt=""
              />
            <ListItemButton onClick={logout}>
              <Logout1>

              <ListItemIcon>
                <Icon></Icon>
              </ListItemIcon>
              <ListItemText primary="Sair" />
              </Logout1>
            </ListItemButton>
          </Cabecalho>
        </header>
      </Pagina>
              </AuthProvider>
    </header>
  );
}

export default Header;
