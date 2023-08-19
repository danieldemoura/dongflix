import { useEffect, useState } from "react";
import { btnDefault, primary, secundary} from "../ButtonLink/button.module.css"
import { headLine, headlineTitle, description } from "./headline.module.css"
import { useLocation, Link } from "react-router-dom"


export default function Headline({ title, text }) {
    const { pathname } = useLocation();
    const isPageMain = pathname === "/";

    return (
        <div className={headLine}>
            <h1 className={headlineTitle}>
                {title}
            </h1>
            <p className={description}>
                {text}
            </p>

            { isPageMain && <>
                <Link to="/home" className={`${btnDefault} ${primary}`}>{"ASSINAR DONGFLIX"}</Link>
                <Link className={`${btnDefault} ${secundary}`}>{"JÁ SOU ASSINANTE"}</Link>
            </> }
        </div>
    )
}