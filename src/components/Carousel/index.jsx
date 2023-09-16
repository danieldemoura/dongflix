import { ReactComponent as ButtonLeft } from "../../assets/svg/left.svg";
import { ReactComponent as ButtonRight } from "../../assets/svg/right.svg";
import { CarouselContext } from "../../contexts/CarouselContext";
import { useContext, useEffect, useState } from "react";
import styles from "./Carousel.module.css";

export default function Carousel({ title, children }) {
    const { sliderWidth, carouselRef, imagesVisibles } = useContext(CarouselContext);
    const [carouselOverflow, setCarouselOverflow] = useState(false);

    function scrollCarouselLeft() {
        carouselRef.current.scrollLeft -= sliderWidth * imagesVisibles;
    }
    
    function scrollCarouselRight() {
        carouselRef.current.scrollLeft += sliderWidth * imagesVisibles;
    }

    function showButtonsCarousel() {
        if (carouselRef.current.scrollWidth > carouselRef.current.clientWidth) {
            setCarouselOverflow(true);
            
        } else {
            setCarouselOverflow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", showButtonsCarousel);
        showButtonsCarousel();
        
        return () => {
            window.removeEventListener("resize", showButtonsCarousel);
        }
        
    },[sliderWidth])

    return (
        <section className={styles.carouselWrapper}>
            <div className={styles.carouselHeader}>
                <h2 className={styles.title}>{ title }</h2>
                <div className={styles.boxButton}>
                    { carouselOverflow &&
                        <>
                            <ButtonLeft onClick={scrollCarouselLeft}/>
                            <ButtonRight onClick={scrollCarouselRight}/>
                        </>
                    }
                </div>
            </div>
            <div className={styles.carouselSlider} ref={carouselRef}>
                { children }
            </div>
        </section>
    )
}