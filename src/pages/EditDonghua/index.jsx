import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TextField from "../../components/TextField";
import styles from "./EditDonghua.module.css";
import ButtonLink from "../../components/ButtonLink";
import useApiData from "../../hooks/useApiData";
import { updateDataDonghuas } from "../../services/MyAPI/updateDataDonghuas";

export default function EditDonghua() {
    const [donghuas] = useApiData("donghuas");
    const [donghuaData, setDonghuaData] = useState({
        title: "",
        release: "",
        age: "",
        genres: "",
        status: "",
        trailers: {},
        poster: "",
        banner: "",
        sinopse: ""
    });
    const params = useParams();

    useEffect(() => {
        const donghua = donghuas.find(donghua => donghua.title === params.name);
    
        if (donghua) {
            setDonghuaData({
                ...donghua,
            });
        }
    
    }, [donghuas]);
    

    function handleInputChange(event) {
        const {name, value } = event.target;
        setDonghuaData({
            ...donghuaData,
            [name]: value
        })

        // Atualiza o estado do input age que só pode aceitar números
        if(name === "age") {
            setDonghuaData({
                ...donghuaData,
                age: value.replace(/[^\d]/g, "")
            })
        }

        if(name === "trailers") {
            setDonghuaData({
                ...donghuaData,
                trailers: {
                    url: donghuaData.trailers.map(trailer => trailer.url),
                    season: "2ª Temporada - Trailer"
                }
            })
        }

    }

    function saveChanges(event) {
        event.preventDefault();
        const data = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(donghuaData)
        }

        console.log(donghuaData)

        // updateDataDonghuas("donghuas/0", data);
    }

    function addEpisode() {
        alert("Infelizmente essa funcionalidade ainda não foi implementada");
    }

    return (
        <article className={styles.article}>
            <h1 className={styles.title}>Adicionar Donghua</h1>
            <form method="POST" onSubmit={saveChanges} className={styles.form}>
                <TextField 
                    type="text"
                    label="Nome do Donghua"
                    name="title"
                    id="title"
                    className={styles.textField}
                    value={donghuaData.title}
                    onChange={handleInputChange}
                />
               <div className={styles.wrapperInput}>
                    <TextField 
                        type="text"
                        label="Ano de Lançamento"
                        name="release"
                        id="release"
                        className={styles.textField}
                        value={donghuaData.release}
                        onChange={handleInputChange}
                    />
                    <TextField 
                        type="text"
                        label="Classificação Indicativa"
                        name="age"
                        id="age"
                        className={styles.textField}
                        value={donghuaData.age}
                        onChange={handleInputChange}
                    />
                    <TextField 
                        type="text"
                        label="Gênero"
                        name="genres"
                        id="genres"
                        className={styles.textField}
                        value={donghuaData.genres}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={styles.wrapperInput}>
                    <TextField 
                        element="select"
                        label="Status"
                        name="status"
                        id="status"
                        className={`${styles.textField}`}
                        value={donghuaData.status}
                        onChange={handleInputChange}
                    >
                        <option value=""></option>
                        <option value="Em lançamento">Em Lançamento</option>
                        <option value="Finalizado">Finalizado</option>
                    </TextField>
                    <TextField 
                        type="text"
                        label="Trailers"
                        name="trailers"
                        id="trailers"
                        className={styles.textField}
                        value={donghuaData.trailers}
                        onChange={handleInputChange}
                    />
                </div>
                <TextField 
                    type="text"
                    label="Poster"
                    name="poster"
                    id="poster"
                    className={styles.textField}
                    title="Insira o link de uma imagem que esteja no formato retrato"
                    value={donghuaData.poster}
                    onChange={handleInputChange}
                />
                <TextField 
                    type="text"
                    label="Banner"
                    name="banner"
                    id="banner"
                    className={styles.textField}
                    title="Insira o link de uma imagem que esteja no formato paisagem"
                    value={donghuaData.banner}
                    onChange={handleInputChange}
                />
                <TextField 
                    element="textarea"
                    label="Sinopse"
                    name="sinopse"
                    id="sinopse"
                    className={`${styles.textField} ${styles.textArea}`}
                    value={donghuaData.sinopse}
                    onChange={handleInputChange}
                />
                <div className={styles.wrapperBtn}>
                    <ButtonLink element="button" typeStyle="primary" size="small">
                        Salvar <Icon icon="ic:outline-save" width="24" />
                    </ButtonLink>
                </div>
            </form>
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
        </article>
    )
}