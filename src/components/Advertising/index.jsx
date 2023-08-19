import { sectionImage, sectionTitle, description, sectionContainer } from "./advertising.module.css"
import SubscriptionPlans from "../SubscriptionPlans"
import useApiData from "../../hooks/useApiData";

export default function Advertising() {
    const [banner] = useApiData();
    const advertisements = banner.slice(1);

    return (
        <>
            {advertisements.map((section) => (
                <section className={sectionImage} style={{backgroundImage: `url(${section.image})`}} key={section.id}>
                    <div className={sectionContainer}>
                        <h2 className={sectionTitle}>
                            {section.title}
                        </h2>
                        <p className={description}>
                            {section.message}
                        </p>
                    </div>
                </section>)) 
            }
            <SubscriptionPlans />
        </>
    )
}