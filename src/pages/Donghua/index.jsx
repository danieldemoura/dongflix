import { DonghuasDataContext } from "../../contexts/DonghuasDataContext";
import { CarouselContextProvider } from "../../contexts/CarouselContext";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { CardEpisode } from "../../components/CardEpisode";
import { CardDonghua } from "../../components/CardDonghua";
import { Icon } from '@iconify/react';
import Header from "../../components/Header";
import Headline from "../../components/Headline";
import DonghuaDescription from "../../components/DonghuaDescription";
import YouTube from "react-youtube";
import TextField from "../../components/TextField";
import Carousel from "../../components/Carousel";
import Slider from "../../components/Carousel/Slider";
import styles from "./Donghua.module.css";
import { NotFound } from "../NotFound";

export default function Donghua() {
    const { name } = useParams();
    const donghuas= useContext(DonghuasDataContext);
    const donghuaFound = donghuas.find(animation => animation.title === name);

    const [currentDonghua, setCurrentDonghua] = useState({});
    const [relatedDonghuas, setRelatedDonghuas] = useState([]);
    const [trailers, setTrailers] = useState([]);

    const [youtubeVideo, setYoutubeVideo] = useState();
    const [option, setOption] = useState(0);
    
    const dialogRef = useRef();
    const btnCloseRef = useRef();

    useEffect(() => {
        
        // Se não for undefined adiciona o Donghua encontrado no estado
        if(donghuaFound) {
            setCurrentDonghua(donghuaFound);
            setTrailers(donghuaFound.trailers);
        }

        if(relatedDonghuas) {
            // limita a lista de donghua até 10 elementos
            setRelatedDonghuas(
                donghuas.filter((donghua, index) => {
                    return index < 10
                })
            )
        }

    }, [donghuas, name])


    function closeModal() {
        document.body.style.overflow = "auto";
        dialogRef.current.close();
    }

    function showModal(url) {
        document.body.style.overflow = "hidden";
        dialogRef.current.showModal();
        setYoutubeVideo(url);
    }

    function handleSelectChange(event) {
        const index = event.target.value;
        setOption(index);
    }



    if(!donghuaFound) {
        return <NotFound />
    }

    return (
        <>     
            <Header>
                <Headline title={currentDonghua.title} link={currentDonghua.banner}>
                    {currentDonghua.seasons !== undefined &&
                        <DonghuaDescription 
                            text={currentDonghua.sinopse}
                            release={currentDonghua.release}
                            genere={currentDonghua.genres}
                            age={currentDonghua.age}
                            status={currentDonghua.status}
                            seasons={currentDonghua.seasons}
                        />
                    }
                </Headline>
            </Header>
            <section className={styles.sectionDetails}>
                <h2 className={styles.detailsTitle}>Mais Detalhes Sobre a Obra</h2>
                <p className={styles.source}>{currentDonghua.source}</p>
                <div className={styles.detailsBox}>
                    <div className={styles.sinopse}>
                        <span className={styles.sinopseTitle}>Sinopse</span>
                        <p>{currentDonghua.sinopse}</p>
                    </div>
                    <div className={styles.genres}>
                        <span className={styles.genreTitle}>Gênero</span>
                        <p>{currentDonghua.genres}</p>
                    </div>
                </div>
            </section>
            <section className={styles.sectionTrailers}>
                <CarouselContextProvider showModal={showModal}>
                    <Carousel title="Trailers">
                        <Slider donghuas={trailers}/>
                    </Carousel>
                </CarouselContextProvider>
            </section>
            <section className={styles.sectionEpisodes}>
                <TextField 
                    element="select"
                    name="season"
                    className={styles.selectSeason}
                    onChange={handleSelectChange}
                >
                    {currentDonghua.seasons !== undefined &&
                        currentDonghua.seasons.map((season, index) => {
                            return (
                                <option 
                                    className={styles.option} 
                                    key={season.season}
                                    value={index}
                                >
                                    {season.season}
                                </option>
                            )
                        })
                    }
                </TextField>
                <ol className={styles.wrapperEpisodes}>
                    {currentDonghua.seasons &&
                        currentDonghua.seasons[option].episodes.map(episode => {
                            return (
                                <CardEpisode episode={episode} key={episode.name}/>
                            )
                        })
                    }
                </ol>
            </section>
            <section className={styles.sectionRelated}>
                <h2 className={styles.relatedTitle}>Obras relacionadas</h2>
                <CardDonghua donghuasList={relatedDonghuas} currentDonghua={currentDonghua}/>            
            </section>
            {currentDonghua.trailers !== undefined &&
                <dialog className={styles.modal} ref={dialogRef}>
                    <div className={styles.modalBox}>
                        <div className={styles.videoBox}>
                            <Icon className={styles.btnClose} 
                                icon="ic:baseline-close" 
                                width="100%" 
                                height="100%"
                                color="#FFF"
                                ref={btnCloseRef}
                                onClick={closeModal}
                            />
                            <YouTube 
                                videoId={youtubeVideo}
                                className={styles.wrapperVideo}
                                iframeClassName={styles.video}
                            />
                        </div>
                    </div>
                </dialog>
            }
        </>
    )
}