import SubscriptionPlans from "../SubscriptionPlans"
import useApiData from "../../hooks/useApiData";
import styles from "./Advertising.module.css"

export default function Advertising() {
    const [banner] = useApiData("advertisements");
    const advertisements = banner.slice(1);

    return (
        <>
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