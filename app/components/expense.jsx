import { ArrowDownIcon, ArrowUpIcon, Trash2Icon } from "lucide-react";

const Expense = ({ expense, removeExpense }) => {
  const handleDelete = () => {
    removeExpense(expense.id, expense);
  };

  const formattedExpenseValue = expense.value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="relative flex items-center gap-2.5 rounded-lg bg-gray-200 p-2.5">
      {expense.type === "income" && (
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-300 bg-opacity-50 text-green-400">
          <ArrowUpIcon size={20} />
        </div>
      )}

      {expense.type === "expense" && (
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-300 bg-opacity-50 text-red-400">
          <ArrowDownIcon size={20} />
        </div>
      )}

      <div>
        <p className="text-xs capitalize text-gray-400">{expense.name}</p>
        <p>{formattedExpenseValue}</p>
      </div>

      <button
        onClick={handleDelete}
        className="absolute right-0 mr-2.5 text-red-600"
      >
        <Trash2Icon size={20} />
      </button>
    </div>
  );
};

export default Expense;
