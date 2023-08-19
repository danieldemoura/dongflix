import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PageDefault({children}) {
    return (
        <>
            <Menu />
            <Header />
            <main>
                <Outlet />
                {children}
            </main>
            <Footer />
        </>
    )
}