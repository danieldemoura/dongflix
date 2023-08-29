import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import HeadlineAnime from "../HeadlineAnime";
import Headline from "../Headline";
import Banner from "../Banner";

export default function Header() {
    const { pathname } = useLocation();

    return (
        <header className={styles.header}>
            <Banner>
                { pathname === "/" 
                    ? <> <Headline /> </>
                    : <> <HeadlineAnime /> </> 
                }
            </Banner>
        </header>
    )
}