import React from "react";
import { useData } from "../context/DataContext";
import { GraficoVendas } from "../components/GraficoVendas";

export const Resumo = () => {
  const { data } = useData();
  console.log(data);

  if (data === null) return null;
  return (
    <section>
      <div className="resumo flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data.filter((item) => item.status !== "falha")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BLR" })}
          </span>
        </div>
        <div className="box">
          <h2>Recebido</h2>
          <span>
            {data.filter((item) => item.status === "pago")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BLR" })}
          </span>
        </div>
        <div className="box">
          <h2>Processando</h2>
          <span>
            {data.filter((item) => item.status === "processando")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BLR" })}
          </span>
        </div>
      </div>
      <div className="box"><GraficoVendas data={data}/></div>
    </section>
  );
};
