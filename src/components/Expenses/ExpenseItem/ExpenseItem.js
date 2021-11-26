import React from 'react'
import styles from './ExpenseItem.module.css'
import Card from '../../UI/Card'
import ExpenseDate from '../ExpenseDate/ExpenseDate'

function ExpenseItem({ title, amount, date }) {
    return (
        <div>
            <Card className={styles.expenseItem}>
                <ExpenseDate date={date} />
                <div className={styles.expenseDesc}>
                    <h2>{title}</h2>
                    <div className={styles.expensePrice}>{amount}원</div>
                </div>
            </Card>

        </div>
    )
}

export default ExpenseItem
