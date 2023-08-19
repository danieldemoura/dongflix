import { ReactComponent as Logo } from "../../assets/logo.svg"
import { footer, listInfo, container, copyright } from "./footer.module.css"

export default function Footer() {
    return (
        <footer className={footer}>
            <div className={container}>
                <Logo />
                <ul className={listInfo}>
                    <li>Privacidade e Termos</li>
                    <li>Contrato de Assinatura</li>
                    <li>Termos de Uso</li>
                    <li>Política de Privacidade</li>
                </ul>
            </div>
            <p className={copyright}>
                © 2023 Dongflix. Todos os direitos reservados.
            </p>
        </footer>
    )
}