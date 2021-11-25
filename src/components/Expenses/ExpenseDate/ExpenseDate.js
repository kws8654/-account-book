import React from 'react'
import styles from './ExpenseDate.module.css'


function ExpenseDate({ date }) {
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.getFullYear();
    return (
        <div>
            <div className={styles.date}>
                <div className={styles.month}>{month}</div>
                <div className={styles.year}>{year}</div>
                <div className={styles.day}>{day}</div>
            </div>
        </div>
    )
}

export default ExpenseDate
