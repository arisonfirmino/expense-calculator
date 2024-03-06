import { WalletIcon } from "lucide-react";

const Balance = ({ balance }) => {
  const formattedBalance = balance.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="relative flex flex-col rounded-3xl bg-secondary p-5">
      <p className="text-sm text-gray-400">Saldo Total</p>
      <p className="text-2xl font-medium">{formattedBalance}</p>

      <WalletIcon
        size={18}
        className="absolute right-0 top-0 m-5 text-highlight"
      />
    </div>
  );
};

export default Balance;
