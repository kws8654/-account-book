import React, { useState } from 'react'
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import styles from './AddExpense.module.css'

function AddExpense({ addExpense }) {

    const [editing, setEditing] = useState(false)

    const addExpenseData = (expenseData) => {
        addExpense(expenseData);
    }
    const startEditing = () => {
        setEditing(true);
    }

    const stopEditing = () => {
        setEditing(false);
    }

    return (
        <div className={styles.addExpense}>
            <ExpenseForm addExpenseData={addExpenseData} stopEditing={stopEditing} />
        </div>
    )
}

export default AddExpense
