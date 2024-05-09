import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

const LastExpense = ({ lastExpense }) => {
  return (
    <div className="flex gap-2.5 rounded-xl bg-main p-2.5 text-white">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
        {lastExpense.type === "income" ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </div>

      <div className="flex flex-col">
        <h3 className="text-xs opacity-50">{lastExpense.name}</h3>
        <p className="text-base">
          R${" "}
          {lastExpense.value.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  );
};

export default LastExpense;
