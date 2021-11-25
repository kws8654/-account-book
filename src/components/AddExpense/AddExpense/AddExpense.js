import React from 'react'
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import styles from './AddExpense.module.css'

function AddExpense({ addExpense }) {

    const addExpenseData = (expenseData) => {
        addExpense(expenseData);
    }
    return (
        <div className={styles.addExpense}>
            <ExpenseForm addExpenseData={addExpenseData} />
        </div>
    )
}

export default AddExpense
