import { errorMessages, errorTypes } from "./errorMessages.js";
import { useState } from "react";
import styles from "./TextField.module.css";

export default function TextField({ 
   type,
   label,
   id,
   name,
   element,
   minlength,
   value,
   onChange,
   children,
   className,
   pattern,
   logo,
   title,
}) {
   const [messageError, setMessageError] = useState();
   const Field = element || "input";

   function validateField(event) {
      setMessageError("");

      errorTypes.forEach(error => {
         if (event.target.validity[error]) {
            const currentInput = event.target.name;
            setMessageError(errorMessages[currentInput][error]); 
         }
      });
   }

  return (
      <div className={styles.container}>
         <div>
            <Field
               id={id}
               className={`${styles.input} ${className ? className : ""}`}
               type={type}
               name={name}
               minLength={minlength}
               value={value}
               onBlur={(event) => validateField(event)}
               onChange={onChange}
               pattern={pattern}
               title={title}
               required
            >
               { children }
            </Field>
            <label htmlFor={id} className={styles.label}>{label}</label>
         </div>
         
         { logo }
         <span className={styles.messageError}>{messageError}</span>
    </div>
  );
}
