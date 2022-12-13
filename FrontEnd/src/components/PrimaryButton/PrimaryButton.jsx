import React from 'react'
import styles from './PrimaryButton.module.css' 

export default function PrimaryButton ({onSubmitFunction, onClickFunction, text, buttonType}){
  return (
    <button onSubmit={onSubmitFunction} onClick={onClickFunction} className={styles.button} type={buttonType}>{text}</button>
  )
}
