import styles from "./Banner.module.css"

export default function Banner({ children }) {
    return (
        <div className={styles.banner}>
            { children }
        </div>
    )
}