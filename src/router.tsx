import FavoriteScreen from "Favoritos/contexts/FavoriteScreen";
import Home from "pages/Home/PaginaPrincipal";
import { Login } from "pages/login/Login";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { RoutePath } from "./Router/routes";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.LOGIN} element={<Home />} />
      <Route path={RoutePath.CADASTRAR_USUARIOS} element={<Home />} />
      <Route path={RoutePath.CADASTRAR_JOGOS} element={<Home />} />
      <Route path={RoutePath.FAVORITOS} element={<FavoriteScreen />} />
    </Routes>
  );
};

export default Router;
