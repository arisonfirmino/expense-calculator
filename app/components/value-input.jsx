const ValueInput = ({ register, error }) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium">Valor:</label>
      <input
        type="number"
        placeholder="Insira o valor"
        {...register}
        className={`border-b border-solid bg-transparent p-2.5 outline-none ${error ? "border-red-600" : "border-primary"}`}
      />
    </div>
  );
};

export default ValueInput;
