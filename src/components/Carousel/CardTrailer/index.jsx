import { Icon } from "@iconify/react";
import styles from "./CardTrailer.module.css";
import { useContext } from "react";
import { CarouselContext } from "../../../contexts/CarouselContext";

export function CardTrailer({trailer}) {
    const { showModal } = useContext(CarouselContext);
    return (
        <div className={styles.cardTrailer} key={trailer.url}>
            <figure>
                <div className={styles.wrapperImage}>
                    <img className={styles.trailerThumbnail} 
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
                </div>
                <figcaption className={styles.legend}>
                    <span className={styles.trailerTitle}>{trailer.season}</span>
                </figcaption>
            </figure>
        </div>  
    )
}