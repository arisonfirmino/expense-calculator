const NameInput = ({ register, error }) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium">Nome:</label>
      <input
        type="text"
        placeholder="Exemplo: salário"
        {...register}
        className={`border-b border-solid bg-transparent p-2.5 outline-none ${error ? "border-red-600" : "border-primary"}`}
      />
    </div>
  );
};

export default NameInput;
