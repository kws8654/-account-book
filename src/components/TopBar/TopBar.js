import React from 'react'
import Card from '../UI/Card'
import styles from './TopBar.module.css'

function TopBar({ expenses, switchEditing }) {

    const countExpenses = expenses.length;
    const switchButton = (e) => {
        const text = e.target.innerText
        if (text === '등록') {
            e.target.innerText = '닫기'
        } else {
            e.target.innerText = '등록'
        }
        switchEditing();
    }

    return (
        <div>
            <Card className={styles.topBar}>
                <div className={styles.title}>
                    <div className={styles.name}>카드 가계부</div>
                    <div className={styles.count}>{countExpenses}</div>
                </div>
                <button className={styles.editButton} onClick={switchButton}>등록</button>
            </Card>
        </div>

    )
}

export default TopBar
