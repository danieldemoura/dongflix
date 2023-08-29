import VideoCard from "../VideoCard";
import styles from "./Slider.module.css";

export default function Slider({ calculateSliderWidth, sliderRef, array }) {

    return (
        array.map((donghua) => {
            return (
                <div className={styles.slider} 
                    onLoad={calculateSliderWidth}
                    key={donghua.id}
                    ref={sliderRef} 
                >
                    <VideoCard donghua={donghua}/>
                </div>
            )
        })
    )
}