import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Banner from "../Banner";

export default function Header({children}) {
    return (
        <header className={styles.header}>
            <Banner>
                { children }
            </Banner>
        </header>
    )
}