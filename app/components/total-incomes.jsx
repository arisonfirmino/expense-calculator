import { ArrowUpIcon } from "lucide-react";

const TotalIncomes = ({ totalIncomes }) => {
  return (
    <div className="flex items-center gap-2.5 rounded-2xl bg-background p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
        <ArrowUpIcon />
      </div>

      <div className="flex flex-col">
        <h3 className="text-sm opacity-50">Gastos Totais</h3>
        <p className="text-2xl font-medium">R$ {totalIncomes}</p>
      </div>
    </div>
  );
};

export default TotalIncomes;
