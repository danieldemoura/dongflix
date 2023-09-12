import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { DonghuasDataProvider } from "../../contexts/DonghuasDataContext";

export default function PageDefault() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <DonghuasDataProvider>
                <Menu />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </DonghuasDataProvider>
        </>
    )
}