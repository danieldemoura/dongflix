import useApiData from "../../hooks/useApiData";
import SlideShow from "../SlideShow";
import ButtonLink from "../ButtonLink";
import styles from "./Headline.module.css"


export default function Headline() {
    const [banner] = useApiData();
    const { title, message, slideShow } = banner.length > 0 ? banner.slice(0, 1)[0] : [];    

    return (
        <>
            <div className={styles.headLine}>
                <h1 className={styles.headlineTitle}>
                    {title}
                </h1>
                <p className={styles.description}>
                    {message}
                </p>
                <ButtonLink typeStyle="primary" url="sign-up">ASSINAR DONGFLIX</ButtonLink>
                <ButtonLink url="login">JÁ SOU ASSINANTE</ButtonLink>
            </div>
            <SlideShow slideShow={slideShow}/>
        </>
    )
}