import { title, plansPrice, table, row, cell, th, button, small } from "./subscriptionPlans.module.css"
import { btnDefault, primary} from "../ButtonLink/button.module.css"
import { ReactComponent as No } from "../../assets/svg/no.svg"
import { ReactComponent as Yes } from "../../assets/svg/yes.svg"
import { Link } from "react-router-dom"

export default function SubscriptionPlans() {
    return (
        <section className={plansPrice}>
            <h2 className={title}>Escolha o melhor plano para você</h2>
            <table className={table}>
                <thead>
                    <tr className={row}>
                        <th></th>
                        <th className={th}>BÁSICO</th>
                        <th className={th}>PLUS</th>
                        <th className={th}>PREMIUM</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={row}>
                        <th className={cell}>Preço por mês</th>
                        <td className={cell}>R$ 4,99</td>
                        <td className={cell}>R$ 8,99</td>
                        <td className={cell}>R$ 14,99</td>
                    </tr>
                    <tr className={row}>
                        <th className={cell}>Resolução</th>
                        <td className={cell}>720p</td>
                        <td className={cell}>1080P</td>
                        <td className={cell}>4k</td>
                    </tr>
                    <tr className={row}>
                        <th className={cell}>Sem anúncios</th>
                        <td className={cell}>
                            <No />
                        </td>
                        <td className={cell}>
                            <Yes />
                        </td>
                        <td className={cell}>
                            <Yes />
                        </td>
                    </tr>
                    <tr className={row}>
                        <th className={cell}>Download</th>
                        <td className={cell}>
                            <No />
                        </td>
                        <td className={cell}>
                            <No />
                        </td>
                        <td className={cell}>
                            <Yes />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={button}>
                <Link to="/home" 
                    className={`${btnDefault} 
                    ${primary} 
                    ${small}`}
                >
                        {"ASSINAR DONGFLIX"}
                </Link>
            </div>
        </section>
    )
}