import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import styles from './ExpenseList.module.css';

function ExpenseList({ items, deleteExpense }) {
  return (
    <ul className={styles.expenseList}>
      {items.length === 0 ? (
        <p>저장된 기록이 없습니다.</p>
      ) : (
        items.map((expense) => (
          <ExpenseItem
            expense={expense}
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            deleteExpense={deleteExpense}
          />
        ))
      )}
    </ul>
  );
}

export default ExpenseList;
