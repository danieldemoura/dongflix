import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import styles from "./CardRelease.module.css";

export default function CardRelease({ donghua }) {
    const releasesEpisodes = {
        ...donghua,
        ...donghua.episode,
        link: donghua.url,
    }

    const donghuasList = {
        ...donghua,
        donghua: donghua.title,
        thumbnail: donghua.banner,
        link: donghua.title,
    }

    const data = donghua.banner ? donghuasList : releasesEpisodes;

    return (
        <figure className={styles.figure}>
            <Link to={`/donghua/${data.link}`}>
                <div className={styles.containerImg}>
                        <img className={styles.thumbnail} 
                            src={`${data.thumbnail}`} alt={`Imagem do Donghua: ${data.title}`}
                        />
                    <Icon icon="ion:play" width="100%" color="#FFF" className={styles.imageSVG} />
                </div>
            </Link>
            <figcaption className={styles.legend}>
                <p className={styles.title}>{data.donghua}</p>
                <span className={styles.episode}>{data.name}</span>
            </figcaption>
        </figure>
    )
}