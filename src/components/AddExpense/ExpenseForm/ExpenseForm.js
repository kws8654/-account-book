import React, { useState } from 'react'
import styles from './ExpenseForm.module.css'

function ExpenseForm({ addExpenseData }) {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChange = (e) => {
        setTitle(e.target.value);
    };
    const amountChange = (e) => {
        setAmount(e.target.value);
    };
    const dateChange = (e) => {
        setDate(e.target.value);
    };

    const submitData = (e) => {
        e.preventDefault();
        const exepenseData = {
            id: Math.random().toString(),
            title: title,
            amount: amount,
            date: new Date(date),
        }
        addExpenseData(exepenseData);
    }

    return (
        <form onSubmit={submitData}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <input
                        type='text'
                        value={title}
                        onChange={titleChange}
                    />
                </div>
                <div className={styles.control}>
                    <input
                        type='number'
                        min='10'
                        step='1'
                        value={amount}
                        onChange={amountChange}
                    />
                </div>
                <div className={styles.control}>
                    <input
                        type='date'
                        value={date}
                        onChange={dateChange}
                    />
                </div>
                <div className={styles.buttons}>
                    <button onClick>취소</button>
                    <button type='submit'>등록</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm
