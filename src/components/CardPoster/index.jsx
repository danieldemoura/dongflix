import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import styles from "./CardPoster.module.css";

export default function CardPoster({donghua}) {
    return (
        <div className={styles.cardDonghua}>
            <p className={styles.donghuaName}>
                {donghua.title}
            </p>
            <div className={styles.cardPoster}>
                <Link to={`/donghua/${donghua.title}`} >
                    <img 
                        className={styles.posterImg} 
                        src={donghua.poster}
                        alt={`Imagem do Donghua ${donghua.title}`} 
                    />
                </Link>
                <div className={styles.cardButtons}>
                    <Link to={`/editar/${donghua.title}`}>
                        <Icon 
                            className={styles.svg} 
                            icon="mdi:pencil-box" 
                            width="24" 
                            color="white" 
                        />
                    </Link>
                    <Icon
                        className={styles.svg}
                        icon="ic:baseline-delete"
                        width="24"
                        color="white"
                    />
                </div>
            </div>
        </div>
    )
}