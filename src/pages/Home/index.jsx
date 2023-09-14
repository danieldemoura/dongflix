import { YouTubeAPIContext } from "../../contexts/YouTubeAPIContext";
import { ButttonWatch } from "../../components/ButtonWatch";
import { useContext, useEffect, useState } from "react";
import { DonghuasDataContext } from "../../contexts/DonghuasDataContext";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";
import VideoPlayer from "../../components/VideoPlayer";
import Headline from "../../components/Headline";
import styles from "./Home.module.css";

export default function Home() {
    const [youTube, setYouTubeAPI] = useState({});
    const [loadingData, setLoadingData] = useState({});
    const donghuasData = useContext(DonghuasDataContext);
    const { title, sinopse, trailers } = loadingData;

    useEffect(() => {
        const selectedDonghua = donghuasData[3];

        // Se não for undefined então adiciona o elemento no estado
        if (selectedDonghua) {
          setLoadingData(donghuasData[3]);
        }

    }, [donghuasData]);
      

    return (
        <>
            <Header>
                <YouTubeAPIContext.Provider value={{ youTube, setYouTubeAPI }}>
                    { trailers !== undefined &&
                        <VideoPlayer trailer={trailers[2].url}/>
                    }
                    <Headline title={title}>
                        <p className={styles.description}>
                            { sinopse }
                        </p>
                        <ButttonWatch url={`/donghua/${title}`} />
                    </Headline>

                </YouTubeAPIContext.Provider>
            </Header>
            <Carousel />
        </>
    )
}