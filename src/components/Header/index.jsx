import { header } from "./header.module.css"
import Banner from "../Banner"
import Headline from "../Headline"
import SlideShow from "../SlideShow"
import useApiData from "../../hooks/useApiData"
import Video from "../Video"
import { useLocation } from "react-router-dom"

export default function Header() {
    const [banner] = useApiData();
    const { pathname } = useLocation();
    const { title, message, slideShow } = banner.length > 0 ? banner.slice(0, 1)[0] : [];    
    
    return (
        <header className={header}>
            <Banner>
                <Headline title={title} text={message}/>

                { pathname === "/" 
                    ? <SlideShow slideShow={slideShow}/>
                    : <Video /> 
                }
            </Banner>
        </header>
    )
}