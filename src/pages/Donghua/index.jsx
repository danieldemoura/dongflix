import { DonghuasDataContext } from "../../contexts/DonghuasDataContext";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { Icon } from '@iconify/react';
import Header from "../../components/Header";
import Headline from "../../components/Headline";
import DonghuaDescription from "../../components/DonghuaDescription";
import styles from "./Donghua.module.css";
import YouTube from "react-youtube";

export default function Donghua() {
    const donghuasData = useContext(DonghuasDataContext);
    const [video, setVideo] = useState();
    const dialogRef = useRef();
    const btnCloseRef = useRef();
    const [donghua, setDonghua] = useState({});
    const { name } = useParams();

    useEffect(() => {
        const donghuaFound = donghuasData.find(animation => animation.title === name);

        // Se não for undefined adiciona o Donghua encontrado no estado
        if(donghuaFound) {
            setDonghua(donghuaFound);
        }

    }, [donghuasData])

    function closeModal() {
        document.body.style.overflow = "auto";
        dialogRef.current.close();
    }

    function showModal(url) {
        document.body.style.overflow = "hidden";
        dialogRef.current.showModal();
        setVideo(url);
    }

    return (
        <>      
            <Header>
                <Headline title={donghua.title} link={donghua.banner}>
                    <DonghuaDescription 
                        text={donghua.sinopse}
                        release={donghua.release}
                        genere={donghua.genere}
                        age={donghua.age}
                        status={donghua.status}
                    />
                </Headline>
            </Header>
            <section className={styles.sectionTrailers}>
                <h2 className={styles.sectionTitle}>Trailers</h2>
                <div className={styles.wrapperTrailers}>                    
                    {
                        donghua.trailers !== undefined &&
                        donghua.trailers.map(trailer => {                           
                            return (
                                <div className={styles.cardTrailer} key={trailer.url}>
                                    <img className={styles.thumbnail} 
                                        src={trailer.thumbnail} 
                                        alt=""
                                        onClick={() => showModal(trailer.url)} 
                                    />
                                    <Icon className={styles.icon} 
                                        icon="mdi:youtube"
                                        color="red" 
                                        width="100"
                                        height="100" 
                                    />
                                    <span className={styles.trailerTitle}>{trailer.season}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className={styles.sectionTrailers}>
                <h2 className={styles.sectionTitle}>1ª Temporada</h2>
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