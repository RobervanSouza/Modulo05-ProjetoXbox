import {
  Badge,
  Button,
  Icon,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { RoutePath } from "Router/routes";
import { ReactComponent as Logout } from "assets/icons/logout.svg";
import { Cabecalho, ImgLogo, Logout1, MenuItemLogout, Pagina } from "./style";
import { AuthProvider, useAuthContext } from "Auth/Context/AuthContext";
import { Favorite } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { favoritoContext } from "Favoritos/contexts/FavoritoContext";

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

    const { favorites } = useContext(favoritoContext);

  const favoritescont = favorites.length;

   const navigate = useNavigate();
  function handleclick() {
    navigate(`/favoritos`);
  }

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
               <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            onClick={() =>  navigate(`/favoritos`)}
            color="inherit"
            />
            <Badge badgeContent={favoritescont} color="primary">
              <Favorite />
            </Badge>
          </Cabecalho>
        </header>
      </Pagina>
              </AuthProvider>
    </header>
  );
}

export default Header;
