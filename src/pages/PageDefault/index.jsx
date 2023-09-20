import { Outlet, useLocation } from "react-router-dom";
import { DonghuasDataProvider } from "../../contexts/DonghuasDataContext";
import { FavoriteContextProvider } from "../../contexts/FavoriteContext";
import { useEffect } from "react";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";


export default function PageDefault() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <DonghuasDataProvider>
                <Menu />
                <FavoriteContextProvider>
                    <main>
                        <Outlet />
                    </main>
                </FavoriteContextProvider>
                <Footer />
            </DonghuasDataProvider>
        </>
    )
}