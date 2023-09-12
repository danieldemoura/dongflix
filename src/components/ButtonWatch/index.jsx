import ButtonLink from "../ButtonLink";
import ButtonSound from "../ButtonSound";
import styles from "./ButtonWatch.module.css";

export function ButttonWatch({ url }) {
    return (
        <div className={styles.boxButton}>
            <ButtonLink typeStyle="primary" icon="play" url={url}>ASSISTIR</ButtonLink>
            <ButtonSound />
        </div>
    )
}