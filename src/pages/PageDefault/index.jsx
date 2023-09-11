import { Outlet, useLocation } from "react-router-dom";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./PageDefault.module.css"
import { useEffect } from "react";

export default function PageDefault() {
    const { pathname } = useLocation();
    const showHeader = pathname === "/" || pathname === "/home";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Menu />
            { showHeader && <Header /> }
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}