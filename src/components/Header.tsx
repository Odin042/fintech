import React from "react";
import { DateRange } from "./DateRange";
import { Meses } from "./Meses";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [title, setTitle] = React.useState("Resumo");
  const location = useLocation();
  console.log({ location });
  React.useEffect(() => {
    if (location.pathname === "/vendas") {
      setTitle("Vendas");
      document.title = "Vendas";
    } else if (location.pathname === "/") {
      setTitle("Resumo");
      document.title = "Resumo";
    }
  }, [location]);

  return (
    <header className="mb">
      <div className="datarange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Meses />
    </header>
  );
};
