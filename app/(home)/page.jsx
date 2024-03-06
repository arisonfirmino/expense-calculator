"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (savedExpenses) {
      setExpenses(savedExpenses);
      calculateTotals(savedExpenses);
    }
  }, []);

  const calculateTotals = (expenses) => {
    let income = 0;
    let expense = 0;
    expenses.forEach((expenseItem) => {
      if (expenseItem.type === "expense") {
        expense += expenseItem.value;
      } else {
        income += expenseItem.value;
      }
    });
    setTotalIncome(income);
    setTotalExpense(expense);
    setBalance(income - expense);
  };

  const addExpense = (expense) => {
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);
    calculateTotals(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  const removeExpense = (id) => {
    const updatedExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(updatedExpenses);
    calculateTotals(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
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
