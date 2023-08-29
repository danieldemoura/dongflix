import { useEffect, useState } from "react";
import styles from "./SlideShow.module.css";

export default function SlideShow({ slideShow }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

    const animation = {
        transform: `translateX(-${currentSlide * 100}%)`,
        transition: isTransitionEnabled ? ".5s ease" : "none"
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const nextSlide = ( currentSlide + 1 ) % slideShow.length;
            const ifOnLastSlide = currentSlide === slideShow.length - 1;

            ifOnLastSlide ? setIsTransitionEnabled(false) : setIsTransitionEnabled(true);
            setCurrentSlide(nextSlide);
  
        }, isTransitionEnabled ? 4000 : 0);
        
        return () => clearInterval(interval);

    },[currentSlide, slideShow]);

    return (
        <div className={styles.slideImages}>
            {Array.isArray(slideShow) && slideShow.map((image, index) => {
                return <img
                        src={image} 
                        key={index}
                        style={animation} 
                        className={styles.background} 
                        alt=""
                    />
            })}
        </div>
    )
}