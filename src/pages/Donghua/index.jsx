import { DonghuasDataContext } from "../../contexts/DonghuasDataContext";
import { useLocation, useParams } from "react-router-dom";
import Header from "../../components/Header";
import Headline from "../../components/Headline";
import styles from "../Home/HeadlineHome.module.css"
import { useContext, useEffect, useState } from "react";

export default function Donghua() {
    const donghuasData = useContext(DonghuasDataContext);
    const [donghua, setDonghua] = useState({});
    const { name } = useParams();

    useEffect(() => {
        const donghuaFound = donghuasData.find(animation => animation.title === name);

        // Se não for undefined adiciona o Donghua encontrado no estado
        if(donghuaFound) {
            setDonghua(donghuaFound);
        }

    }, [donghuasData])

    return (
        <Header>
            <Headline title={donghua.title} text={donghua.sinopse} styles={styles} link={donghua.banner}/>
        </Header>
    )
}