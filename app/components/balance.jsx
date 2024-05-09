import LastExpense from "./last-expense";

const Balance = () => {
  return (
    <div className="flex w-full flex-col justify-between gap-5 rounded-3xl bg-background p-5">
      <div className="flex flex-col">
        <h3 className="text-sm opacity-50">Saldo Total</h3>
        <p className="text-2xl font-medium">R$ 0,00</p>
      </div>

      <div className="flex flex-col gap-2.5">
        <h3 className="opacity-50">Última Movimentação</h3>

        <LastExpense />
      </div>
    </div>
  );
};

export default Balance;
