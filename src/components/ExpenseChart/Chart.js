import React from 'react'
import styles from './Chart.module.css'
import ChartBar from './ChartBar';

function Chart({ dataPoints }) {
    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    return (
        <div className={styles.chart}>
            {dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />

            ))}
        </div>
    )
}

export default Chart
