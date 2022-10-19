import Home from "pages/Home/principal";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { RoutePath } from "./Router/routes";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<Home />} />
    </Routes>
  );
};

export default Router;
