import Expense from "./expense";

const ExpenseHistory = ({ expenses }) => {
  return (
    <div className="flex flex-col gap-5 p-5">
      <h3 className="font-medium">Histórico de Despesas</h3>

      <div className="flex flex-col gap-2.5">
        {expenses.map((expense) => (
          <Expense key={expense.id} expense={expense} />
        ))}
      </div>
    </div>
  );
};

export default ExpenseHistory;
