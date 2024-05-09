const NameInput = () => {
  return (
    <div className="flex flex-col">
      <label className="font-medium">Nome:</label>
      <input
        type="text"
        placeholder="Exemplo: salário"
        className="border-b border-solid border-primary bg-transparent p-2.5 outline-none"
      />
    </div>
  );
};

export default NameInput;
