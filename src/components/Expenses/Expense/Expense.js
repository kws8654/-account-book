import React from 'react'
import styles from './Expense.module.css'
import ExpenseList from '../ExpenseList/ExpenseList'
import Card from '../../UI/Card'

function Expense({ expenses }) {
    return (
        <div>
            <Card className={styles.expenses}>
                <ExpenseList items={expenses} />
            </Card>
        </div>
    )
}

export default Expense
