import React from 'react';
import styles from './ExpenseItem.module.css';
import Card from '../../UI/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

function ExpenseItem({ expense, title, amount, date, deleteExpense }) {
  const deleteExpenseHandler = () => {
    deleteExpense(expense.id);
  };
  return (
    <div>
      <Card className={styles.expenseItem}>
        <ExpenseDate date={date} />
        <div className={styles.expenseDesc}>
          <h2>{title}</h2>
          <div className={styles.expensePrice}>{amount}원</div>
        </div>
        <button className={styles.button} onClick={deleteExpenseHandler}>
          X
        </button>
      </Card>
    </div>
  );
}

export default ExpenseItem;
