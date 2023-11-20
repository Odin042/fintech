import React from "react";
import { IVenda } from "../context/DataContext";
import { NavLink } from "react-router-dom";

export const VendaItem = ({ venda }: { venda: IVenda }) => {
  return (
    <div className="venda box">
      <NavLink to={`/vendas/${venda.id}`} style={{ fontFamily: "monospace" }}>
        {venda.id}
      </NavLink>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BLR",
        })}
      </div>
    </div>
  );
};
