import React from 'react'
import styles from './ChartBar.module.css'

function ChartBar({ maxValue, value, label }) {
    let barFillHeight = '0%';

    if (maxValue > 0) {
        barFillHeight = Math.round((value / maxValue) * 100) + '%';
    }

    return (
        <div className={styles.chartBar}>
            <div className={styles.chartBarInner}>
                <div
                    className={styles.chartBarFill}
                    style={{ height: barFillHeight }}
                ></div>
            </div>
            <div className={styles.chartBarLabel}>{label}</div>
        </div>
    );
}

export default ChartBar
