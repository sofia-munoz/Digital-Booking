import styles from './loadingCard.module.css';

export default function LoadingCard () {
    return(
        <div className={styles.loading_container}>
            <div className={styles.loader}></div>
            <div className={styles.loading_text}>Loading... </div>   
        </div>
    )}