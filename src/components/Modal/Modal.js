import React from 'react'
import Card from '../UI/Card'
import styles from './Modal.module.css'

function Modal(props) {
    return (
        <div>
            <div className={styles.backdrop} />
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <button className={styles.button} onClick={props.closeModal}>확인</button>
                </footer>
            </Card>
        </div>
    )
}

export default Modal


