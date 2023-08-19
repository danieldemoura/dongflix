import { banner } from "./banner.module.css"

export default function Banner({ children }) {
    return (
        <div className={banner}>
            { children }
        </div>
    )
}