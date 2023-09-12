import SubscriptionPlans from "../../components/SubscriptionPlans"
import useApiData from "../../hooks/useApiData";
import Header from "../../components/Header";
import Headline from "../../components/Headline";
import ButtonLink from "../../components/ButtonLink";
import SlideShow from "../../components/SlideShow";
import styles from "./Index.module.css";
import stylesHeadline from "./HeadlineIndex.module.css";

export default function Index() {
    const [banner] = useApiData("advertisements");
    const { title, message, slideShow } = banner.length > 0 ? banner.slice(0, 1)[0] : [];    
    const advertisements = banner.slice(1);

    return (
        <>
            <Header>
                <Headline title={title} text={message} styles={stylesHeadline}>
                    <p className={stylesHeadline.description}>
                        { message }
                    </p>
                    <ButtonLink typeStyle="primary" url="sign-up">ASSINAR DONGFLIX</ButtonLink>
                    <ButtonLink url="login">JÁ SOU ASSINANTE</ButtonLink>
                </Headline>

                <SlideShow slideShow={slideShow}/>
            </Header>

            {advertisements.map((section) => (
                <section className={styles.sectionImage} style={{backgroundImage: `url(${section.image})`}} key={section.id}>
                    <div className={styles.sectionContainer}>
                        <h2 className={styles.sectionTitle}>
                            {section.title}
                        </h2>
                        <p className={styles.description}>
                            {section.message}
                        </p>
                    </div>
                </section>)) 
            }

            <SubscriptionPlans />
        </>
    )
}