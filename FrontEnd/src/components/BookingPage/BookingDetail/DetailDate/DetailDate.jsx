import React from 'react'
import styles from './DetailDate.module.css'

export const DetailDate = () => {
const dateSelected = "15/12/2022"
  return (
    <div className={styles.detail_date}>
        <hr />
        <div className={styles.check_in_out}>
        <p>Check-in</p>
        <p>{dateSelected}</p>
        </div>
        <hr />
        <div className={styles.check_in_out}>
        <p>Check-out</p>
        <p>{dateSelected}</p>
        </div>
        <hr />
    </div>
  )
}
