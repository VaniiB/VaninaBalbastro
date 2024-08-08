
import { BrowserRouter,Route, Routes } from "react-router-dom";

import { Header } from "../componentes/Header";
import { Footer } from "../componentes/Footer";
import { Final } from "../componentes/Final";
import { Index } from "../pages/Index";



export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
      <Route path="/" element={<Index />} />

      </Routes>
      
      <Final />
      <Footer />
    </BrowserRouter>
  );

};

export default AppRouter;
