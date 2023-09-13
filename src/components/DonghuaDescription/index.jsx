import styles from "./DonghuaDescription.module.css";

export default function DonghuaDescription({ text, release, genere, age, status, title }) {
    return (
        <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <span className={styles.releaseAndGenere}>Estreia {release} | {genere}</span>
                <span className={styles.status}>Estatus: {status}</span>
                
                <span className={styles.releaseAndGenere}>Classificação: { age } anos</span>
                <p className={styles.description}>
                    { text }
                </p>
            </div>
    )
}