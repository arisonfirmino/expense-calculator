import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

const Expense = ({ type, name, value }) => {
  return (
    <div className="flex items-center gap-2.5 rounded-xl bg-main p-2.5">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
        {type === "income" ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </div>

      <div>
        <h3 className="text-xs capitalize opacity-50">{name}</h3>
        <p className="text-base">R$ {value}</p>
      </div>
    </div>
  );
};

export default Expense;
