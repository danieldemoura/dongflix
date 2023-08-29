import { Outlet, useLocation } from "react-router-dom";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./PageDefault.module.css"

export default function PageDefault() {
    const { pathname } = useLocation();
    const showHeader = pathname !== "/sign-up" && pathname !== "/login";
    const showShadow = pathname !== "/" && pathname !== "/sign-up" && pathname !== "/login";

    return (
        <>
            <Menu />
            { showHeader && <Header /> }
            <main className={ showShadow ? styles.home : "" }>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}