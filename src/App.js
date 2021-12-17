import React, { useState } from 'react';
import './App.css';
import Expense from './components/Expenses/Expense/Expense';
import AddExpense from './components/AddExpense/AddExpense/AddExpense';
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
      date: new Date(2021, 2, 12),
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
    {
      id: '5',
      title: '과자',
      amount: 3500,
      date: new Date(2020, 8, 11),
    },
    {
      id: '6',
      title: '만년필',
      amount: 67000,
      date: new Date(2019, 4, 11),
    },
    {
      id: '7',
      title: '무선 마우스',
      amount: 34000,
      date: new Date(2019, 4, 11),
    },
  ];

  const [expenses, setExpenses] = useState(expensesDefault);
  const [editing, setEditing] = useState(false);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (selectedExpense) => {
    setExpenses(
      expenses.filter((expense) => {
        return expense.id !== selectedExpense;
      })
    );
    console.log(selectedExpense);
  };

  const switchEditing = () => {
    editing && setEditing(false);
    !editing && setEditing(true);
  };

  const filterdYear = (selectedYear) => {
    setExpenses(selectedYear);
  };

  return (
    <div>
      <TopBar expenses={expenses} switchEditing={switchEditing} />
      {editing && <AddExpense addExpense={addExpense} />}
      <Expense
        expenses={expenses}
        filterdYear={filterdYear}
        deleteExpense={deleteExpense}
      />
    </div>
  );
}

export default App;
