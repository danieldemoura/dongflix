import { DonghuasDataContext } from "../../contexts/DonghuasDataContext";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import Headline from "../../components/Headline";
import DonghuaDescription from "../../components/DonghuaDescription";
import styles from "./Donghua.module.css";

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
            <Headline title={donghua.title} text={donghua.sinopse} styles={styles} link={donghua.banner}>
                <DonghuaDescription 
                    text={donghua.sinopse}
                    release={donghua.release}
                    genere={donghua.genere}
                    age={donghua.age}
                    status={donghua.status}
                />
            </Headline>
        </Header>
    )
}