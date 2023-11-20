import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { IVenda } from "../context/DataContext";

type VendaDia ={
  data: string;
  pago: number;
  processando: number;
  falha: number;
}

function transformData(data: IVenda[]): VendaDia[] {
  const dias = data.reduce((acc: { [key: string]: VendaDia }, item) => {
    const dia = item.data.split(" ")[0];
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[dia][item.status] += item.preco;
    return acc;
  }, {});

  return  Object.values(dias);
}

export const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  const transformedData = transformData(data);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={transformedData}>
        <XAxis dataKey="data" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#085f00" yAxisId={0} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#0a0879"
          yAxisId={1}
        />
        <Line type="monotone" dataKey="falha" stroke="#bf0202" yAxisId={1} />
      </LineChart>
    </ResponsiveContainer>
  );
};
