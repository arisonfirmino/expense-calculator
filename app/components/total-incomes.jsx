import { ArrowUpIcon } from "lucide-react";

const TotalIncomes = ({ totalIncome }) => {
  return (
    <div className="flex items-center gap-2.5 rounded-3xl bg-secondary p-5">
      <div className="flex items-center justify-center rounded-full bg-green-300 bg-opacity-50 p-2.5 text-green-400">
        <ArrowUpIcon size={20} />
      </div>

      <div className="flex flex-col">
        <p className="text-sm text-gray-400">Ganhos Totais</p>
        <p className="text-xl font-medium">R$ {totalIncome}</p>
      </div>
    </div>
  );
};

export default TotalIncomes;
