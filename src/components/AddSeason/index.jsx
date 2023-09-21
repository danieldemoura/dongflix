import { FormContext } from "../../contexts/FormContext";
import { useContext } from "react";
import { Icon } from "@iconify/react";
import styles from "./AddSeason.module.css";

export function AddSeason() {
    const { donghuaData } = useContext(FormContext);

    function addEpisode() {
        alert("Infelizmente essa funcionalidade ainda não foi implementada");
    }

    return (
        <div className={styles.season}>
            <header className={styles.seasonHeader}>
                <span>1ª Temporada</span>
                <div className={styles.seasonButtons}>
                    <span className={styles.seasonBtn}>Editar <Icon icon="mdi:pencil" /></span>
                    <span className={styles.seasonBtn}>Adicionar <Icon icon="tdesign:add" /></span>
                </div>
            </header>
            <div className={styles.seasonInfo}>
                <p>
                    Adicione todos os episódios relacionados a primeira temporada do Donghua aqui.
                </p>
            </div>
            <div className={styles.seasonEpisodes}>
                <div className={styles.addEpisode} onClick={addEpisode}>
                    <span>Adicionar Episódio</span>
                </div>                  
                {
                    donghuaData.seasons &&
                    [...donghuaData.seasons[0].episodes].reverse().map(episode => {
                        return (
                            <div className={styles.cardEpisode} key={episode.number}>
                                <figure className={styles.figure}>
                                    <img 
                                        className={styles.episodeThumbnail} 
                                        src={episode.thumbnail} 
                                        alt={episode.name} 
                                    />
                                    <figcaption className={styles.figcaption}>
                                        <span>{episode.name}</span>
                                    </figcaption>
                                </figure>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}