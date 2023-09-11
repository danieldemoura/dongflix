import { ReactComponent as ButtonLeft } from "../../assets/svg/left.svg";
import { ReactComponent as ButtonRight } from "../../assets/svg/right.svg";
import { useEffect, useRef, useState } from "react";
import useApiData from "../../hooks/useApiData";
import styles from "./Carousel.module.css";
import Slider from "./Slider";

export default function Carousel() {
    const [sliderWidth, setSliderWidth] = useState(0);
    const [imagesVisibles, setImagesVisibles] = useState(1);
    const [datas] = useApiData("releases");
    const carouselRef = useRef(null);
    const sliderRef = useRef(null);
    const donghuas = datas // Donghua é o termo usado para se referir a Anime Chinês

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
    
    
    function scrollCarouselLeft() {
        carouselRef.current.scrollLeft -= sliderWidth * imagesVisibles;
    }
    
    function scrollCarouselRight() {
        carouselRef.current.scrollLeft += sliderWidth * imagesVisibles;
    }

    return (
        <section className={styles.carouselWrapper}>
            <div className={styles.carouselHeader}>
                <h2 className={styles.title}>Últimos Episódios Lançados</h2>
                <div className={styles.boxButton}>
                    <ButtonLeft onClick={scrollCarouselLeft}/>
                    <ButtonRight onClick={scrollCarouselRight}/>
                </div>
            </div>
            <div className={styles.carouselSlider} ref={carouselRef}>
                <Slider calculateImagesVisibles={calculateImagesVisibles}
                    sliderRef={sliderRef} 
                    donghuasRelease={donghuas}
                />
            </div>
        </section>
    )
}