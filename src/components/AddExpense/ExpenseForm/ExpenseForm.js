import React, { useState } from 'react'
import styles from './ExpenseForm.module.css'

function ExpenseForm({ addExpenseData, stopEditing }) {

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
                        placeholder='지출명'
                    />
                </div>
                <div className={styles.control}>
                    <input
                        type='number'
                        min='10'
                        step='1'
                        value={amount}
                        onChange={amountChange}
                        placeholder='금액'
                    />
                </div>
                <div className={styles.control}>
                    <input
                        type='date'
                        value={date}
                        onChange={dateChange}
                        placeholder='날짜'
                    />
                </div>
                <div className={styles.buttons}>
                    <button onClick={stopEditing}>취소</button>
                    <button type='submit'>등록</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm
