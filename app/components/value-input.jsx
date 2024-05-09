const ValueInput = () => {
  return (
    <div className="flex flex-col">
      <label className="font-medium">Valor:</label>
      <input
        type="number"
        placeholder="Insira o valor"
        className="border-b border-solid border-primary bg-transparent p-2.5 outline-none"
      />
    </div>
  );
};

export default ValueInput;
