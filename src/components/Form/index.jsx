import { updateDataDonghuas } from "../../services/MyAPI/updateDataDonghuas";
import { FormContext } from "../../contexts/FormContext";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Posters } from "./Posters";
import { Icon } from "@iconify/react";
import ButtonLink from "../ButtonLink";
import TextField from "../TextField";
import styles from "./Form.module.css";

export function Form() {
    const { 
        donghuas, 
        donghuaData, 
        donghuaTrailers, 
        setDonghuaTrailers, 
        setDonghuaData, 
        handleInputChange, 
        handleInputTrailersChange 
    } = useContext(FormContext);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const donghua = donghuas.find(donghua => donghua.title === params.name);
    
        if(donghua) {
            setDonghuaData({
                ...donghua,
            });

            // Cria uma copia do array de Trailers
            setDonghuaTrailers(donghua.trailers);
        }
    
    }, [donghuas]);
    

    function saveChanges(event) {
        event.preventDefault();

        const uptatedDonghua = {
            ...donghuaData,
            trailers: donghuaTrailers
        }

        const id = uptatedDonghua.id;
        const page = uptatedDonghua.title;

        const data = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uptatedDonghua)
        }

        console.log(uptatedDonghua)

        updateDataDonghuas(`donghuas/${id}`, data);
        navigate(`/donghua/${page}`);
    }


    return (
        <>
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
                </div>
                <TextField 
                    type="text"
                    label="Gênero"
                    name="genres"
                    id="genres"
                    className={styles.textField}
                    value={donghuaData.genres}
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
                <Posters />
                {
                    donghuaTrailers.map((trailer, index) => {
                        return (
                            <div key={index} className={styles.wrapperInput}>
                                <TextField 
                                    type="text"
                                    label="Trailer: ID do YouTube"
                                    name="url"
                                    id="url"
                                    className={styles.textField}
                                    value={trailer.url}
                                    onChange={(event) => handleInputTrailersChange(event, index)}
                                />
                                <TextField 
                                    type="text"
                                    label="Nome do trailer"
                                    name="season"
                                    id="season"
                                    className={styles.textField}
                                    value={trailer.season}
                                    onChange={(event) => handleInputTrailersChange(event, index)}
                                />
                                <TextField 
                                    type="text"
                                    label="Thumbnail do trailer"
                                    name="thumbnail"
                                    id="thumbnail"
                                    className={styles.textField}
                                    value={trailer.thumbnail}
                                    onChange={(event) => handleInputTrailersChange(event, index)}
                                />
                            </div>
                        )
                    })
                }
                <div className={styles.wrapperBtn}>
                    <ButtonLink element="button" typeStyle="primary" size="small">
                        Salvar <Icon icon="ic:outline-save" width="24" />
                    </ButtonLink>
                </div>
            </form>
        </>
    )
}