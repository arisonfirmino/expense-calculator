import Expense from "./expense";

const ExpenseHistory = () => {
  return (
    <div className="flex flex-col gap-5 p-5">
      <h3 className="font-medium">Histórico de Despesas</h3>

      <div>
        <Expense />
      </div>
    </div>
  );
};

export default ExpenseHistory;
