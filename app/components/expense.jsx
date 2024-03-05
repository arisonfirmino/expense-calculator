import { ArrowUpIcon, Trash2Icon } from "lucide-react";

const Expense = () => {
  return (
    <div className="relative flex items-center gap-2.5 rounded-lg bg-gray-200 p-2.5">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-300 bg-opacity-50 text-green-400">
        <ArrowUpIcon size={20} />
      </div>

      <div>
        <p className="text-xs text-gray-400">Salário</p>
        <p>R$ 3.500,00</p>
      </div>

      <button className="absolute right-0 mr-2.5 text-red-600">
        <Trash2Icon size={20} />
      </button>
    </div>
  );
};

export default Expense;
