import styles from "./VideoCard.module.css";

export default function VideoCard({ donghua }) {
    return (
        <img className={styles.thumbnail} 
            src={`${donghua.landscapePoster}`} alt={`Imagem do Donghua: ${donghua.title}`}
        />
    )
}