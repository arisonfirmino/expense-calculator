const TypeInput = ({ register }) => {
  return (
    <div className="flex flex-col">
      <label className="font-medium">Tipo:</label>
      <select
        name="type"
        {...register}
        className="border-b border-solid border-primary bg-transparent p-2.5 outline-none"
      >
        <option value="expense" className="text-black">
          Gasto
        </option>
        <option value="income" className="text-black">
          Ganho
        </option>
      </select>
    </div>
  );
};

export default TypeInput;
