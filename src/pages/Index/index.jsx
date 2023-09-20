import SubscriptionPlans from "../../components/SubscriptionPlans"
import useApiData from "../../hooks/useApiData";
import Header from "../../components/Header";
import Headline from "../../components/Headline";
import ButtonLink from "../../components/ButtonLink";
import SlideShow from "../../components/SlideShow";
import fetchData from "../../services/MyAPI/fetchData";
import styles from "./Index.module.css";
import { useEffect, useState } from "react";

export default function Index() {
    const [slideShow, setSlideShow] = useState({});
    const [advertisements, setAdvertisements] = useState([])

    useEffect(() => {
        fetchData("advertisements")
        .then(json => {
            const slideShow = json.slice(0, 1)[0];
            setSlideShow(slideShow);

            setAdvertisements(json.slice(1));
        })
        .catch(error => {
            console.error("Erro ao buscar dados do banner:", error);
        });
        
    }, []);
        

    return (
        <>
            <Header>
                <Headline title={slideShow.title} text={slideShow.message}>
                    <p className={styles.description}>
                        {slideShow.message}
                    </p>
                    <ButtonLink typeStyle="primary" url="sign-up">ASSINAR DONGFLIX</ButtonLink>
                    <ButtonLink url="login">JÁ SOU ASSINANTE</ButtonLink>
                </Headline>

                <SlideShow slideShow={slideShow.slideShow}/>
            </Header>

            {
                advertisements.map((section) => (
                    <section className={styles.sectionImage} style={{backgroundImage: `url(${section.image})`}} key={section.id}>
                        <div className={styles.sectionContainer}>
                            <h2 className={styles.sectionTitle}>
                                {section.title}
                            </h2>
                            <p className={styles.description}>
                                {section.message}
                            </p>
                        </div>
                    </section>)
                ) 
            }

            <SubscriptionPlans />
        </>
    )
}