import { ReactComponent as Logo } from "../../assets/svg/logo.svg"
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Logo />
                <ul className={styles.listInfo}>
                    <li>Privacidade e Termos</li>
                    <li>Contrato de Assinatura</li>
                    <li>Termos de Uso</li>
                    <li>Política de Privacidade</li>
                </ul>
            </div>
            <p className={styles.copyright}>
                © 2023 Dongflix. Todos os direitos reservados.
            </p>
        </footer>
    )
}