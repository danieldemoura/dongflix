import { Icon } from '@iconify/react';
import styles from "./CardRelease.module.css";

export default function CardRelease({ donghua, episode }) {
    return (
        <figure className={styles.figure}>
            <div className={styles.containerImg}>
                <img className={styles.thumbnail} 
                    src={`${episode.thumbnail}`} alt={`Imagem do Donghua: ${donghua.title}`}
                />
                <Icon icon="ion:play" width="100%" color="#FFF" className={styles.imageSVG} />
            </div>
            <figcaption className={styles.legend}>
                <p className={styles.title}>{donghua.donghua}</p>
                <span className={styles.episode}>{episode.name}</span>
            </figcaption>
        </figure>
    )
}