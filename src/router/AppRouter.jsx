
import { BrowserRouter,Route, Routes } from "react-router-dom";

import { Header } from "../componentes/Header";
import { Index } from "../pages/Index";



export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
      <Route path="/" element={<Index />} />

      </Routes>
      
    </BrowserRouter>
  );

};

export default AppRouter;
