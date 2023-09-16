import { Icon } from '@iconify/react';
import styles from "./CardThumbnail.module.css";

export default function CardThumbnail({ donghua, episode }) {
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