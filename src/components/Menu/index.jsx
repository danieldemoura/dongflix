import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as Profile } from "./profile.svg";
import { ReactComponent as Search } from "./search.svg";
import { ReactComponent as Bell } from "./bell.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./Menu.module.css";

export default function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const isLogged = pathname === "/home";
    const removeShadow = pathname === "/sign-up" || pathname === "/login";
    const [showImage, setShowImage] = useState();

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    // Carrega a Url da image de localStorage em uma Imagem
    const urlImage = localStorage.getItem("isLogin").replace(/\"+/g, "");
    const image = new Image();
    image.src = urlImage;

    window.onload = () => {
        setShowImage(image.naturalWidth !== 0 );
    }

    return (
        <nav className={`${styles.menu} ${removeShadow ? styles.removeShadow : ""}`}>
            <Link to="/" className={`${pathname === "/" ? styles.logo : styles.isHidden}`} >
                <Logo />
            </Link>

            {isLogged && 
                <>
                    <div className={`${styles.menuDrop} ${isMenuOpen ? styles.open : ""}`} onClick={toggleMenu}>
                        <div className={styles.menuBar}></div>
                        <div className={styles.menuBar}></div>
                        <div className={styles.menuBar}></div>
                    </div>
                    <ul className={`${styles.list} ${isMenuOpen ? styles.open : ""}`}>
                        <li className={styles.listLinks}>
                            <span>
                                <NavLink 
                                    className={({ isActive }) =>
                                    isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
                                }>
                                    Home
                                </NavLink>
                            </span>
                            <span>
                                <NavLink className={styles.link}>Séries</NavLink>
                            </span>
                        </li>
                        <li className={styles.containerIcons}>
                            <Search />
                            <Bell />
                            { 
                                showImage
                                // Se o tamanho da imagem é 0 então ela não foi encontrada: 404
                                ? <img className={styles.avatar} src={urlImage} alt="Imagem do Avatar"/>
                                : <Profile />  
                            }
                        </li>
                    </ul>
                </>
            }
        </nav>
    )
}