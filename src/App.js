import React, { useState } from 'react';
import './App.css';
import Expense from './components/Expenses/Expense/Expense';
import AddExpense from './components/AddExpense/AddExpense/AddExpense'

function App() {
  const expensesDefault = [
    {
      id: '1',
      title: '휴지',
      amount: 4500,
      date: new Date(2020, 7, 14),
    },
    {
      id: '2',
      title: 'TV',
      amount: 450000,
      date: new Date(2021, 2, 12)
    },
    {
      id: '3',
      title: '보험료',
      amount: 21000,
      date: new Date(2021, 2, 28),
    },
    {
      id: '4',
      title: '나무 책상',
      amount: 45000,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(expensesDefault)

  const addExpense = (expense) => {
    setExpenses([...expenses, expense])
  }

  return (
    <div>
      <Expense expenses={expenses} />
      <AddExpense addExpense={addExpense} />

    </div>
  );
}

export default App;
