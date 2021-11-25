import React, { useState } from 'react'
import styles from './Expense.module.css'
import ExpenseList from '../ExpenseList/ExpenseList'
import Card from '../../UI/Card'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import ExpenseChart from '../../ExpenseChart/ExpenseChart'

function Expense({ expenses }) {
    const [filtered, setFiltered] = useState('2021')

    const filterChanged = (selected) => {
        setFiltered(selected);
    }

    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filtered;
    });

    return (
        <div>
            <Card className={styles.expenses}>
                <ExpenseFilter selected={filtered} filterChanged={filterChanged} />
                <ExpenseChart expenses={filteredExpenses} />
                <ExpenseList items={expenses} />
            </Card>
        </div>
    )
}

export default Expense
