import { DonghuasDataContext } from "../../contexts/DonghuasDataContext";
import { CarouselContextProvider } from "../../contexts/CarouselContext";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { Icon } from '@iconify/react';
import Header from "../../components/Header";
import Headline from "../../components/Headline";
import DonghuaDescription from "../../components/DonghuaDescription";
import YouTube from "react-youtube";
import TextField from "../../components/TextField";
import Carousel from "../../components/Carousel";
import Slider from "../../components/Carousel/Slider";
import useApiData from "../../hooks/useApiData";
import styles from "./Donghua.module.css";

export default function Donghua() {
    const donghuasData = useContext(DonghuasDataContext);
    const [video, setVideo] = useState();
    const [donghua, setDonghua] = useState({});
    const [option, setOption] = useState(0);
    const dialogRef = useRef();
    const btnCloseRef = useRef();
    const { name } = useParams();

    const [donghuaTrailers] = useApiData(`donghuas?title=${name}`);
    const [trailers, setTrailers] = useState([]);


    useEffect(() => {
        const donghuaFound = donghuasData.find(animation => animation.title === name);
        
        // Se não for undefined adiciona o Donghua encontrado no estado
        if(donghuaFound) {
            setDonghua(donghuaFound);
        }

        if(donghuaTrailers[0]) {
            setTrailers(donghuaTrailers[0].trailers)
        }

    }, [donghuasData, donghuaTrailers])

    function closeModal() {
        document.body.style.overflow = "auto";
        dialogRef.current.close();
    }

    function showModal(url) {
        document.body.style.overflow = "hidden";
        dialogRef.current.showModal();
        setVideo(url);
    }

    function handleSelectChange(event) {
        const index = event.target.value;
        setOption(index);
    }

    return (
        <>      
            <Header>
                <Headline title={donghua.title} link={donghua.banner}>
                    { donghua.seasons !== undefined &&
                        <DonghuaDescription 
                            text={donghua.sinopse}
                            release={donghua.release}
                            genere={donghua.genere}
                            age={donghua.age}
                            status={donghua.status}
                            seasons={donghua.seasons}
                        />
                    }
                </Headline>
            </Header>
            <section className={styles.sectionDetails}>
                <h2 className={styles.detailsTitle}>Mais Detalhes Sobre a Obra</h2>
                <p className={styles.source}>{donghua.source}</p>
                <div className={styles.detailsBox}>
                    <div className={styles.sinopse}>
                        <span className={styles.sinopseTitle}>Sinopse</span>
                        <p>{donghua.sinopse}</p>
                    </div>
                    <div className={styles.genere}>
                        <span className={styles.genereTitle}>Gênero</span>
                        <p>{donghua.genere}</p>
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
                    { donghua.seasons !== undefined &&
                        donghua.seasons.map((season, index) => {
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
                    { donghua.seasons &&
                        donghua.seasons[option].episodes.map(episode => {
                            return (
                                <li className={styles.listItem} key={episode.number}>
                                    <figure className={styles.episode}>
                                        <img 
                                            className={styles.episodeThumnail} 
                                            src={episode.thumbnail} 
                                            alt="" 
                                            />
                                        <figcaption>
                                            <p className={styles.episodeTitle}>{episode.name}</p>
                                        </figcaption>
                                    </figure>
                                </li>
                            )
                        })
                    }
                </ol>
            </section>
            <section className={styles.sectionRelated}>
                <h2 className={styles.relatedTitle}>Donghuas Relacionados</h2>
            </section>
            { donghua.trailers !== undefined &&
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
                                videoId={video}
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