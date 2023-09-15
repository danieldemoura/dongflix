import { ReactComponent as ButtonLeft } from "../../assets/svg/left.svg";
import { ReactComponent as ButtonRight } from "../../assets/svg/right.svg";
import { useContext, useEffect, useRef, useState } from "react";
// import useApiData from "../../hooks/useApiData";
import styles from "./Carousel.module.css";
// import Slider from "./Slider";
import { CarouselContext } from "../../contexts/CarouselContext";

export default function Carousel({ title, children }) {
    const { sliderWidth, carouselRef, imagesVisibles } = useContext(CarouselContext);

    function scrollCarouselLeft() {
        carouselRef.current.scrollLeft -= sliderWidth * imagesVisibles;
    }
    
    function scrollCarouselRight() {
        carouselRef.current.scrollLeft += sliderWidth * imagesVisibles;
    }

    return (
        <section className={styles.carouselWrapper}>
            <div className={styles.carouselHeader}>
                <h2 className={styles.title}>{ title }</h2>
                <div className={styles.boxButton}>
                    <ButtonLeft onClick={scrollCarouselLeft}/>
                    <ButtonRight onClick={scrollCarouselRight}/>
                </div>
            </div>
            <div className={styles.carouselSlider} ref={carouselRef}>
                { children }
            </div>
        </section>
    )
}