import { useContext } from "react";
import TextField from "../../TextField";
import styles from "./Posters.module.css";
import { FormContext } from "../../../contexts/FormContext";

export function Posters() {
    const {donghuaData, handleInputChange} = useContext(FormContext);

    return (
        <>
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
        </>
    )
}