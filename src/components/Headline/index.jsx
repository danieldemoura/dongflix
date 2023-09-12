export default function Headline({title, text, children, styles}) {
    return (
        <>
            <div className={styles.headLine}>
                <h1 className={styles.headlineTitle}>
                    { title }
                </h1>
                <p className={styles.description}>
                    { text }
                </p>
                { children }
            </div>
        </>
    )
}