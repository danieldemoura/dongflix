import { Icon } from '@iconify/react';
import { useContext } from "react";
import { FavoriteContext } from '../../contexts/FavoriteContext';
import { useParams } from 'react-router-dom';
import styles from "./DonghuaDescription.module.css";

export default function DonghuaDescription({ text, release, genere, age, status, title, seasons }) {
    const amountOfSeason = seasons.length === 1 ? "1 Temporada" : `${seasons.length} Temporadas`;

    const { toggleFavorite, favoriteList } = useContext(FavoriteContext);
    const currentDonghua = useParams();
    const isFavorite = favoriteList.includes(currentDonghua.name);

    function favorite() {
        toggleFavorite(currentDonghua.name);
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <span className={styles.releaseAndGenere}>Estreia {release} | {genere}</span>
            <span className={styles.wrapperStatus}>
                <span className={styles.status}>Status: {status}</span>
                <Icon className={styles.favorite} 
                    icon={`${isFavorite ? "ic:outline-favorite" : "ic:outline-favorite-border"}`}
                    width="100%" 
                    height="100%"
                    color={`${isFavorite ? "red" : "white"}`}
                    onClick={favorite}
                />
            </span>

            <span className={styles.releaseAndGenere}>Classificação: {age} | {amountOfSeason}</span>
            <p className={styles.description}>
                {text}
            </p>
        </div>
    )
}