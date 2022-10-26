import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "Auth/Context/AuthContext";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

const queryClient = new QueryClient();
function App() {
  return (
    <AuthProvider>

    <BrowserRouter>
      <QueryClientProvider client={queryClient}>

      <Router />
      </QueryClientProvider>
    </BrowserRouter>
    </AuthProvider>
  );

}

export default App;
