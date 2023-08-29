import { ReactComponent as Play } from "./play.svg"
import { Link } from "react-router-dom";
import styles from "./ButtonLink.module.css";

export default function ButtonLink({ children, typeStyle, size, icon, url, element }) {
    const Tag = element || Link;
    
    return (
        <Tag to={url} 
            className={`
                ${styles.btnDefault} 
                ${typeStyle === "primary" ? styles.primary : styles.secundary}
                ${ size === "small" ? styles.small : ""}
                ${ icon === "play" ? styles.play : ""}
            `}
        >
           { icon === "play" ? <Play /> : ""} { children }
        </Tag>
    )
}