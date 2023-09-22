import styles from "./NotFound.module.css";

export function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>404</h1>
                <p className={styles.text}>A página não foi encontrada ou não existe</p>
            </div>
        </div>
    )
}