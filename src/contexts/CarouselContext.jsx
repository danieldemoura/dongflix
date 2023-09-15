import { createContext, useRef, useState } from "react";
import useApiData from "../hooks/useApiData";

export const CarouselContext = createContext({});

export function CarouselContextProvider({ children }) {
    /* Estados dos componentes Carousel e Slider */
    const [sliderWidth, setSliderWidth] = useState(0);
    const [imagesVisibles, setImagesVisibles] = useState(1);
    const [data] = useApiData("releases");
    const donghuas = data  //Donghuas é o termo usado para se referir a Animes Chinês
    const sliderRef = useRef(null);
    const carouselRef = useRef(null);


    return (
        <CarouselContext.Provider value={{ 
            sliderWidth, 
            setSliderWidth, 
            imagesVisibles, 
            setImagesVisibles,
            donghuas, 
            sliderRef,
            carouselRef
        }}>
            { children }
        </CarouselContext.Provider>
    )
}