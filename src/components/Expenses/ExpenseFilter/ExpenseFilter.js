import React from 'react'
import styles from './ExpenseFilter.module.css'

function ExpenseFilter({ selected, filterChanged }) {

    const filterSelected = (e) => {
        filterChanged(e.target.value);
    }
    return (
        <div className={styles.Filter}>
            <div className={styles.FilterControl}>
                <label>필터</label>
                <select value={selected} onChange={filterSelected}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter
