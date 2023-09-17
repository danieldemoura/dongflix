import styles from "./CardEpisode.module.css";

export function CardEpisode({episode}) {
    return (
        <li className={styles.listItem}>
            <figure className={styles.episode}>
                <img 
                    className={styles.episodeThumnail} 
                    src={episode.thumbnail} 
                    alt={episode.name}
                    />
                <figcaption>
                    <p className={styles.episodeTitle}>{episode.name}</p>
                </figcaption>
            </figure>
        </li>
    )
}