import { YouTubeAPIContext } from "../../contexts/YouTubeAPIContext";
import { ButttonWatch } from "../../components/ButtonWatch";
import { useState } from "react";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";
import useApiData from "../../hooks/useApiData";
import VideoPlayer from "../../components/VideoPlayer";
import Headline from "../../components/Headline";
import stylesHeadline from "./HeadlineHome.module.css";

export default function Home() {
    const [youTube, setYouTubeAPI] = useState({});
    const [anime] = useApiData("donghuas");
    const { title, sinopse, trailer } = anime.length > 0 ? anime[3] : []; 

    return (
        <>
            <Header>
                <YouTubeAPIContext.Provider value={{ youTube, setYouTubeAPI }}>
                    <VideoPlayer trailer={trailer}/>

                    <Headline title={title} text={sinopse} styles={stylesHeadline}>
                        <ButttonWatch url={`/donghua/${title}`} />
                    </Headline>

                </YouTubeAPIContext.Provider>
            </Header>
            <Carousel />
        </>
    )
}