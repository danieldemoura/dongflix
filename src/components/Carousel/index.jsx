import { ReactComponent as ButtonLeft } from "../../assets/svg/left.svg";
import { ReactComponent as ButtonRight } from "../../assets/svg/right.svg";
import { useEffect, useRef, useState } from "react";
import useApiData from "../../hooks/useApiData";
import styles from "./Carousel.module.css";
import Slider from "./Slider";

export default function Carousel() {
    const [sliderWidth, setSliderWidth] = useState(0);
    const [datas] = useApiData();
    const carouselRef = useRef(null);
    const sliderRef = useRef(null);
    const donghuas = datas.slice(0, 10); // Donghua é o termo usado para se referir a Anime Chinês
    const carouselGap = 20;
    const imagesVisible = 5;

    function calculateSliderWidth() {
        if(sliderRef.current) {
            const slideRect = sliderRef.current.getBoundingClientRect();
            setSliderWidth(slideRect.width);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", calculateSliderWidth);

        return () => {
            window.removeEventListener("resize", calculateSliderWidth);
        }
    }, [])
    
    
    function scrollCarouselLeft() {
        carouselRef.current.scrollLeft -= (sliderWidth + carouselGap) * imagesVisible;
    }
    
    function scrollCarouselRight() {
        carouselRef.current.scrollLeft += (sliderWidth + carouselGap) * imagesVisible;
    }

    return (
        <section className={styles.carouselWrapper}>
            <div className={styles.carouselHeader}>
                <h2 className={styles.title}>Últimos Lançamentos</h2>
                <div className={styles.boxButton}>
                    <ButtonLeft onClick={scrollCarouselLeft}/>
                    <ButtonRight onClick={scrollCarouselRight}/>
                </div>
            </div>
            <div className={styles.carouselSlider} ref={carouselRef}>
                <Slider calculateSliderWidth={calculateSliderWidth} sliderRef={sliderRef} array={donghuas}/>
            </div>
        </section>
    )
}