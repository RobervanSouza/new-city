import { useEffect } from "react";
import { Routes, Route} from "react-router-dom";
import { DashBoard, Pessoas, DetalhesPessoas } from "../pages";

import { Cidades } from "../pages/cidades/Cidades";
import { DetalhesCidades } from "../pages/cidades/DetalhesCidades";
import { useDrawerContext } from "../shared/contexts";


export const AppRouter = () => {
  const { setDrawerOptions } = useDrawerContext();
  

  useEffect(() => {
    // com o use effect conforme foi criado so em duplicar ja passa os dados do menu lateral e navega para a rota, ja cria o icone no menu
    setDrawerOptions([
      {
        icons: "home",
        label: "Pagina Inicial",
        path: "/pagina-inicial",
      },
      {
        icons: "group_add",
        label: "Pagina Pessoas",
        path: "/pessoas",
      },
      {
        icons: "location_city",
        label: "Pagina Cidades",
        path: "/cidades",
      },
    ]);
  }, [setDrawerOptions]);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<DashBoard />} />
      <Route path="/pessoas" element={<Pessoas/>} />
      <Route path="/pessoas/detalhes/:id" element= {<DetalhesPessoas/>} />

      <Route path="/cidades" element={<Cidades/>} />
      <Route path="/cidades/detalhes/:id" element= {<DetalhesCidades/>} />
      <Route
      //  path="*"  element={<Navigate to={"/pagina-inicial"} />} //e para renderizar a pagina inicial, caso coloque outros nomes na pagina
      />
    </Routes>
  );
};
