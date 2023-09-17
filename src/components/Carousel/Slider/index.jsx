import { CarouselContext } from "../../../contexts/CarouselContext";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CardTrailer } from "../CardTrailer";
import CardRelease from "../CardRelease";
import styles from "./Slider.module.css";

export default function Slider({donghuas}) {
    const {setSliderWidth, setImagesVisibles, sliderRef, carouselRef } = useContext(CarouselContext);
    const { pathname } = useLocation();

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
        donghuas.map(donghua => {
            return (
                <div className={styles.slider} onLoad={calculateImagesVisibles} key={`${donghua.id}`} ref={sliderRef}>
                    {   pathname === "/home" ?
                            <CardRelease donghua={donghua} episode={donghua.episode}/>
                        :   <CardTrailer trailer={donghua} />
                    }       
                </div>
            )
        })
    )  
}