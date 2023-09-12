export default function Headline({title, text, children, styles, link}) {
    return (
        <>
            <div className={styles.headLine} style={{backgroundImage: `url(${link})`}}>
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