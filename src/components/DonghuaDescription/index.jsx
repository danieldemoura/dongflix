import styles from "./DonghuaDescription.module.css";

export default function DonghuaDescription({ text, release, genere, age, status, title, seasons }) {
    console.log(seasons)
    const amountOfSeason = seasons.length === 1 ? "1 Temporada" : `${seasons.length} Temporadas`;

    return (
        <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <span className={styles.releaseAndGenere}>Estreia {release} | {genere}</span>
                <span className={styles.status}>Status: {status}</span>
                
                <span className={styles.releaseAndGenere}>Classificação: { age } | {amountOfSeason}</span>
                <p className={styles.description}>
                    { text }
                </p>
            </div>
    )
}