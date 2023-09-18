import { YouTubeAPIContext } from "../../contexts/YouTubeAPIContext";
import { ButttonWatch } from "../../components/ButtonWatch";
import { useContext, useEffect, useRef, useState } from "react";
import { DonghuasDataContext } from "../../contexts/DonghuasDataContext";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";
import VideoPlayer from "../../components/VideoPlayer";
import Headline from "../../components/Headline";
// import useApiData from "../../hooks/useApiData";
import Slider from "../../components/Carousel/Slider";
import { CarouselContext, CarouselContextProvider } from "../../contexts/CarouselContext";
// import CardThumbnail from "../../components/Carousel/CardThumbnail";
import useApiData from "../../hooks/useApiData";
import styles from "./Home.module.css";

export default function Home() {
    const [youTube, setYouTubeAPI] = useState({});
    const [loadingData, setLoadingData] = useState({});
    const donghuasData = useContext(DonghuasDataContext);
    const { title, sinopse, trailers } = loadingData;

    const [episodes] = useApiData("releases");
    const [carouselList, setCarouselList] = useState([]);
    const [carouselsTitles, setCarouselsTitles] = useState([
        "Últimos lançamentos",
        "Donghuas",
    ])

    useEffect(() => {
        const selectedDonghua = donghuasData[2];

        // Se não for undefined então adiciona o elemento no estado
        if (selectedDonghua) {
            // Trailer de apresentação da página Home
            setLoadingData(donghuasData[2]);
            setCarouselList([episodes.reverse(), donghuasData]);
        }

    }, [donghuasData, episodes]);
      

    return (
        <>
            <Header>
                <YouTubeAPIContext.Provider value={{ youTube, setYouTubeAPI }}>
                    { trailers !== undefined &&
                        <VideoPlayer trailer={trailers[3].url}/>
                    }
                    <Headline title={title}>
                        <p className={styles.description}>
                            { sinopse }
                        </p>
                        <ButttonWatch url={`/donghua/${title}`} />
                    </Headline>
                </YouTubeAPIContext.Provider>
            </Header>
            <div className={styles.containerCarousel}>
                {carouselList[0] &&
                    carouselList.map((list, index) => {
                        return (
                            <CarouselContextProvider key={index}>
                                <Carousel title={carouselsTitles[index]} carouselList={carouselList}>
                                    <Slider donghuas={list}/>
                                </Carousel>
                            </CarouselContextProvider>
                        )
                    })
                }
            </div>
        </>
    )
}