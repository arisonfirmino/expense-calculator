const ValueInput = ({ register, error }) => {
  const handleInputChange = (event) => {
    const { value } = event.target;
    const newValue = value.replace(/[^0-9,.]/g, "");

    event.target.value = newValue;
  };

  return (
    <div className="flex flex-col">
      <label className="font-medium">Valor:</label>
      <input
        type="text"
        placeholder="Insira o valor"
        {...register}
        onChange={handleInputChange}
        className={`border-b border-solid bg-transparent p-2.5 outline-none ${
          error ? "border-red-600" : "border-primary"
        }`}
      />
    </div>
  );
};

export default ValueInput;
