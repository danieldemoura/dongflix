import { FormContextProvider } from "../../contexts/FormContext";
import { AddSeason } from "../../components/AddSeason";
import { Form } from "../../components/Form";
import styles from "./EditDonghua.module.css";

export default function EditDonghua() {
    return (
        <article className={styles.article}>
            <FormContextProvider>
                <Form />
                <AddSeason />
            </FormContextProvider>
        </article>
    )
}