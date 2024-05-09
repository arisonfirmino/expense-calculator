import { ArrowDownIcon } from "lucide-react";

const LastExpense = () => {
  return (
    <div className="flex gap-2.5 rounded-xl bg-main p-2.5 text-white">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
        <ArrowDownIcon />
      </div>

      <div className="flex flex-col">
        <h3 className="text-xs opacity-50">Ifood</h3>
        <p className="text-base">R$ 117,74</p>
      </div>
    </div>
  );
};

export default LastExpense;
