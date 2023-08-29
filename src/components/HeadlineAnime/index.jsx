import { YouTubeAPIContext } from "../../contexts/YouTubeAPIContext";
import { useState } from "react";
import useApiData from "../../hooks/useApiData";
import styles from "./HeadlineAnime.module.css";
import VideoPlayer from "../VideoPlayer";
import ButtonSound from "../ButtonSound";
import ButtonLink from "../ButtonLink";

export default function HeadlineAnime() {
    const [youTube, setYouTubeAPI] = useState({});
    const [anime] = useApiData();
    const { title, sinopse, trailer } = anime.length > 0 ? anime[0] : []; 

    return (
        <>
            <YouTubeAPIContext.Provider value={{ youTube, setYouTubeAPI }}>
                <VideoPlayer trailer={trailer}/>
                
                <div className={styles.headLine}>
                    <h1 className={styles.headlineTitle}>
                        {title}
                    </h1>
                    <p className={styles.description}>
                        {sinopse}
                    </p>
                    <div className={styles.boxButton}>
                        <ButtonLink typeStyle="primary" icon="play">ASSISTIR</ButtonLink>
                        <ButtonSound />
                    </div>
                </div>
            </YouTubeAPIContext.Provider>
        </>
    )
}