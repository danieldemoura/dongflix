import { useEffect } from "react";
import Carousel from "../../components/Carousel";

export default function Home() {
    useEffect(() => { window.scrollTo(0, 0); },[]);

    return (
        <>
            <Carousel />
        </>
    )
}