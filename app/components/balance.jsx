import LastExpense from "./last-expense";

const Balance = ({ balance, lastExpense }) => {
  return (
    <div className="flex w-full flex-col justify-between gap-5 rounded-3xl bg-background p-5">
      <div className="flex flex-col">
        <h3 className="text-sm opacity-50">Saldo Total</h3>
        <p className="text-2xl font-medium">R$ {balance}</p>
      </div>

      <div className="flex flex-col gap-2.5">
        <h3 className="opacity-50">Última Movimentação</h3>

        {lastExpense && <LastExpense lastExpense={lastExpense} />}
      </div>
    </div>
  );
};

export default Balance;
