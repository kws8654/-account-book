import React, { useState } from 'react';
import './App.css';
import Expense from './components/Expenses/Expense/Expense';
import AddExpense from './components/AddExpense/AddExpense/AddExpense'
import TopBar from './components/TopBar/TopBar';

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
  const [editing, setEditing] = useState(false)

  const addExpense = (expense) => {
    setExpenses([...expenses, expense])
  }

  const switchEditing = () => {
    editing && setEditing(false);
    !editing && setEditing(true);
  }

  const filterdYear = (selectedYear) => {
    setExpenses(selectedYear);
  }

  return (
    <div>
      <TopBar expenses={expenses} switchEditing={switchEditing} />
      {editing && (
        <AddExpense addExpense={addExpense} />)}
      <Expense expenses={expenses} filterdYear={filterdYear} />
    </div>
  );
}

export default App;
