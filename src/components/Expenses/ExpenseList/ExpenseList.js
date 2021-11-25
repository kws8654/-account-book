import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import styles from './ExpenseList.module.css'

function ExpenseList({ items }) {
    return (
        <ul className={styles.expenseList}>
            {items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    )
}

export default ExpenseList
