import { useLocation } from "react-router-dom"
import styles from "./Headline.module.css"

export default function Headline({title, children, link}) {
    const { pathname } = useLocation();
    const pageIndex = pathname === "/";
    const pageHome = pathname === "/home";
    const pageDonghua = pathname.startsWith("/donghua/");

    return (
        <>
            <div className={`${styles.headLine} ${pageIndex ? styles.onTop : ""} ${pageHome ? styles.gradient : ""} ${pageDonghua ? styles.gradient2 : ""}`} style={{backgroundImage: `url(${link})`}}>
                <div className={pageDonghua ? styles.wrapperHeadLine : ""}>
                    <h1 className={styles.headlineTitle}>
                        { title }
                    </h1>
                    { children }
                </div>
            </div>
        </>
    )
}