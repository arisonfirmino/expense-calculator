"use client";

import { useState } from "react";
import Image from "next/image";
import Balance from "../components/balance";
import TotalIncomes from "../components/total-incomes";
import TotalExpenses from "../components/total-expenses";
import Form from "../components/form";
import ExpenseHistory from "../components/expense-history";

const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    updateBalance(expense);
    updateTotals(expense);
  };

  const updateBalance = (expense) => {
    if (expense.type === "expense") {
      setBalance(balance - expense.value);
    } else {
      setBalance(balance + expense.value);
    }
  };

  const updateTotals = (expense) => {
    if (expense.type === "expense") {
      setTotalExpense(totalExpense + expense.value);
    } else {
      setTotalIncome(totalIncome + expense.value);
    }
  };

  const removeExpense = (id, expense) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));

    if (expense.type === "expense") {
      setBalance(balance + expense.value);
      setTotalExpense(totalExpense - expense.value);
    } else {
      setBalance(balance - expense.value);
      setTotalIncome(totalIncome - expense.value);
    }
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-highlight">
      <div className="flex gap-5 rounded-3xl bg-primary p-5">
        <section className="flex flex-col gap-5">
          <div className="flex items-center justify-center gap-2.5">
            <Image
              src="/logo.jpg"
              alt="logo"
              height={1024}
              width={1024}
              className="w-10 rounded-xl"
            />
            <h1 className="text-lg font-medium text-secondary">
              Expense Calculator
            </h1>
          </div>

          <Balance balance={balance} />

          <div className="flex gap-5">
            <TotalIncomes totalIncome={totalIncome} />
            <TotalExpenses totalExpense={totalExpense} />
          </div>

          <div>
            <Form addExpense={addExpense} />
          </div>
        </section>

        <section className="w-80 rounded-3xl bg-secondary">
          <ExpenseHistory expenses={expenses} removeExpense={removeExpense} />
        </section>
      </div>
    </main>
  );
};

export default Home;
