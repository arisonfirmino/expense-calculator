import { ArrowDownIcon } from "lucide-react";

const TotalExpenses = ({ totalExpense }) => {
  const formattedTotalExpense = totalExpense.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="flex items-center gap-2.5 rounded-3xl bg-secondary p-5">
      <div className="flex items-center justify-center rounded-full bg-red-300 bg-opacity-50 p-2.5 text-red-400">
        <ArrowDownIcon size={20} />
      </div>

      <div className="flex flex-col">
        <p className="text-sm text-gray-400">Gastos Totais</p>
        <p className="text-xl font-medium">{formattedTotalExpense}</p>
      </div>
    </div>
  );
};

export default TotalExpenses;
