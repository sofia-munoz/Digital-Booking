import React from 'react'
import { useEffect } from 'react'
import styles from './DetailDate.module.css'

export const DetailDate = ({checkin, checkout}) => {

  return (
    <div className={styles.detail_date}>
        <hr />
        <div className={styles.check_in_out}>
        <p>Check-in</p>
        <p>{checkin}</p>
        </div>
        <hr />
        <div className={styles.check_in_out}>
        <p>Check-out</p>
        <p>{checkout}</p>
        </div>
        <hr />
    </div>
  )
}
