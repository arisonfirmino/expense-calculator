const Form = () => {
  return (
    <form>
      <div className="flex flex-col gap-5 rounded-3xl bg-secondary p-5">
        <section className="flex flex-col gap-1">
          <label className="font-medium">Tipo:</label>
          <select className="border-b border-highlight bg-transparent text-base outline-none">
            <option value="expense">Gasto</option>
            <option value="income">Ganho</option>
          </select>
        </section>

        <section className="flex flex-col gap-1">
          <label className="font-medium">Nome:</label>
          <input
            type="text"
            placeholder="Exemplo: salário"
            className="border-b border-highlight bg-transparent text-base outline-none"
          />
        </section>

        <section className="flex flex-col gap-1">
          <label className="font-medium">Valor:</label>
          <input
            type="number"
            placeholder="Insira o valor"
            className="border-b border-highlight bg-transparent text-base outline-none"
          />
        </section>

        <button
          type="submit"
          className="rounded-xl bg-highlight p-2.5 text-secondary"
        >
          Adicionar
        </button>
      </div>
    </form>
  );
};

export default Form;
