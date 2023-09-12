export default function Headline({title, children, styles, link}) {
    return (
        <>
            <div className={styles.headLine} style={{backgroundImage: `url(${link})`}}>
                <h1 className={styles.headlineTitle}>
                    { title }
                </h1>
                { children }
            </div>
        </>
    )
}