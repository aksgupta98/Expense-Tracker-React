import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Books",
    amount: 600,
    date: new Date(2022, 7, 14),
  },
  { id: "2", title: "Bread", amount: 40, date: new Date(2022, 2, 12) },
  {
    id: "3",
    title: "Cab Ride to Office",
    amount: 330,
    date: new Date(2022, 2, 28),
  },
  {
    id: "4",
    title: "Chair",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
