import { ReactComponent as No } from "../../assets/svg/no.svg"
import { ReactComponent as Yes } from "../../assets/svg/yes.svg"
import styles from "./SubscriptionPlans.module.css"
import ButtonLink from "../ButtonLink"

export default function SubscriptionPlans() {
    return (
        <section className={styles.plansPrice}>
            <h2 className={styles.title}>Escolha o melhor plano para você</h2>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.row}>
                        <th></th>
                        <th className={styles.th}>BÁSICO</th>
                        <th className={styles.th}>PLUS</th>
                        <th className={styles.th}>PREMIUM</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.row}>
                        <th className={styles.cell}>Preço por mês</th>
                        <td className={styles.cell}>R$ 4,99</td>
                        <td className={styles.cell}>R$ 8,99</td>
                        <td className={styles.cell}>R$ 14,99</td>
                    </tr>
                    <tr className={styles.row}>
                        <th className={styles.cell}>Resolução</th>
                        <td className={styles.cell}>720p</td>
                        <td className={styles.cell}>1080P</td>
                        <td className={styles.cell}>4k</td>
                    </tr>
                    <tr className={styles.row}>
                        <th className={styles.cell}>Sem anúncios</th>
                        <td className={styles.cell}>
                            <No />
                        </td>
                        <td className={styles.cell}>
                            <Yes />
                        </td>
                        <td className={styles.cell}>
                            <Yes />
                        </td>
                    </tr>
                    <tr className={styles.row}>
                        <th className={styles.cell}>Download</th>
                        <td className={styles.cell}>
                            <No />
                        </td>
                        <td className={styles.cell}>
                            <No />
                        </td>
                        <td className={styles.cell}>
                            <Yes />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.button}>
                <ButtonLink 
                    url="/sign-up"
                    typeStyle="primary" 
                    size="small"
                >
                    ASSINAR DONGFLIX
                </ButtonLink>
            </div>
        </section>
    )
}