"use client";

import { useState } from "react";

const Form = ({ addExpense }) => {
  const [expenseData, setExpenseData] = useState({
    type: "expense",
    name: "",
    value: "",
  });

  const handleChange = (e) => {
    setExpenseData({
      ...expenseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      type: expenseData.type,
      name: expenseData.name,
      value: parseFloat(expenseData.value),
    };
    addExpense(newExpense);
    setExpenseData({
      type: "expense",
      name: "",
      value: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5 rounded-3xl bg-secondary p-5">
        <section className="flex flex-col gap-1">
          <label className="font-medium">Tipo:</label>
          <select
            name="type"
            value={expenseData.type}
            onChange={handleChange}
            className="border-b border-highlight bg-transparent text-base outline-none"
          >
            <option value="expense">Gasto</option>
            <option value="income">Ganho</option>
          </select>
        </section>

        <section className="flex flex-col gap-1">
          <label className="font-medium">Nome:</label>
          <input
            type="text"
            name="name"
            value={expenseData.name}
            onChange={handleChange}
            placeholder="Exemplo: salário"
            className="border-b border-highlight bg-transparent text-base outline-none"
          />
        </section>

        <section className="flex flex-col gap-1">
          <label className="font-medium">Valor:</label>
          <input
            type="number"
            name="value"
            value={expenseData.value}
            onChange={handleChange}
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
