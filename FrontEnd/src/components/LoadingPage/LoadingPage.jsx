import styles from './loading.module.css';

export default function LoadingPage () {
    return(
        <div className={styles.loading_container}>
            <div className={styles.loader}></div>
            <div className={styles.loading_text}>Loading... </div>   
        </div>
    )}