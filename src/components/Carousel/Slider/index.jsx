import { useContext, useEffect } from "react";
import VideoCard from "../VideoCard";
import styles from "./Slider.module.css";
import { CarouselContext } from "../../../contexts/CarouselContext";

export default function Slider() {
    const {setSliderWidth, setImagesVisibles, donghuas, sliderRef, carouselRef } = useContext(CarouselContext);
    const releases = [...donghuas].reverse();

    function calculateImagesVisibles() {
        if (sliderRef.current) {
            const carouselWidth = carouselRef.current.getBoundingClientRect().width;
            const sliderWidth = sliderRef.current.getBoundingClientRect().width;
            const carouselStyles = window.getComputedStyle(carouselRef.current);
            const gapStyle = carouselStyles.getPropertyValue("--carousel-gap");
            const carouselGap = Number(gapStyle.replace("rem", "")) * 10 // 2rem * 10px: 20px

            const sliderWidthTotal = sliderWidth + carouselGap;
            const numberOfVisibleImages = Math.floor(carouselWidth / sliderWidthTotal);

            setSliderWidth(sliderWidthTotal);
            setImagesVisibles(numberOfVisibleImages);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", calculateImagesVisibles);

        return () => {
            window.removeEventListener("resize", calculateImagesVisibles);
        }
    }, [])

    
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