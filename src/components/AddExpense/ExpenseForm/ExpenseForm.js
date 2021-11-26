import React, { useState } from 'react'
import Modal from '../../Modal/Modal';
import styles from './ExpenseForm.module.css'

function ExpenseForm({ addExpenseData, stopEditing }) {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState()

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

        if (title.trim().length === 0 || amount.trim().length === 0 || date.trim().length === 0) {
            setError({
                title: '공백 오류',
                message: '모든 정보를 입력해주세요.'
            })
            return;
        }
        if (+amount < 10) {
            setError({
                title: '금액 오류',
                message: '금액을 최소 10원 이상 입력해주세요.'
            })
            return;
        }
        const exepenseData = {
            // id: Math.random().toString(),
            title: title,
            amount: amount,
            date: new Date(date),
        };
        addExpenseData(exepenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }

    const closeModal = () => {
        setError(false);
    }

    return (
        <div>
            {error && <Modal title={error.title} message={error.message} closeModal={closeModal} />}
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
        </div>
    )
}

export default ExpenseForm
