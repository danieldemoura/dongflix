import VideoCard from "../VideoCard";
import styles from "./Slider.module.css";

export default function Slider({ calculateImagesVisibles, sliderRef, donghuasRelease }) {
    const releases = [...donghuasRelease].reverse();

    return (
        releases.map(release => {
            return (
                <div className={styles.slider} 
                    onLoad={calculateImagesVisibles}
                    key={`${release.id}`} 
                    ref={sliderRef} 
                >
                    <VideoCard donghua={release} episode={release.episode}/>
                </div>
            )
        })
    )  
}