"use client";

import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "../components/container";
import Balance from "../components/balance";
import TotalIncomes from "../components/total-incomes";
import TotalExpenses from "../components/total-expenses";
import Form from "../components/form";
import Expense from "../components/expense";

const Home = () => {
  const [balance, setBalance] = useState(0);
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [lastExpense, setLastExpense] = useState(null);

  useEffect(() => {
    const storedExpenses = localStorage.getItem("expenses");
    if (storedExpenses) {
      const parsedExpenses = JSON.parse(storedExpenses);
      setExpenses(parsedExpenses);
      setLastExpense(parsedExpenses[parsedExpenses.length - 1]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (newExpense) => {
    newExpense.id = uuidv4();

    newExpense.value = parseFloat(newExpense.value);

    if (newExpense.type === "income") {
      setBalance(balance + newExpense.value);
      setTotalIncomes(totalIncomes + newExpense.value);
    } else if (newExpense.type === "expense") {
      setBalance(balance - newExpense.value);
      setTotalExpenses(totalExpenses + newExpense.value);
    }

    setExpenses([...expenses, newExpense]);
    setLastExpense(newExpense);
  };

  return (
    <Container>
      <section className="flex min-h-full w-full flex-col items-center gap-5 rounded-3xl bg-black p-5">
        <div className="flex w-full flex-col gap-5 text-black xl:flex-row">
          <Balance balance={balance} lastExpense={lastExpense} />

          <div className="flex w-full flex-col gap-5">
            <TotalIncomes totalIncomes={totalIncomes} />
            <TotalExpenses totalExpenses={totalExpenses} />
          </div>
        </div>

        <Form addExpense={addExpense} />
      </section>

      <section className="flex min-h-full w-full flex-col gap-5 rounded-3xl bg-black p-5 xl:max-w-[420px]">
        <h3 className="font-medium uppercase">Histórico de despesas</h3>

        <div className="flex flex-col gap-2.5">
          {expenses
            .slice()
            .reverse()
            .map((expense) => (
              <Expense
                key={expense.id}
                type={expense.type}
                name={expense.name}
                value={expense.value}
              />
            ))}
        </div>
      </section>
    </Container>
  );
};

export default Home;
