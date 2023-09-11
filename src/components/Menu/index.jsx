import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as Profile } from "./profile.svg";
import { ReactComponent as Search } from "./search.svg";
import { ReactComponent as Bell } from "./bell.svg";
import { ReactComponent as Person } from "./person.svg";
import { ReactComponent as Upload } from "./upload.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Menu.module.css";

export default function Menu() {
    let urlImage = null;

    // Se por algum motivo não tiver nenhum valor salvo na chave isLogin
    // O try cath vai evitar que trave o programa ao tentar acessar o atributo .avatar que não existe
    try {
        urlImage = JSON.parse(localStorage.getItem("isLogin")).avatar;
    } catch (error) {
        console.log(error)
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisibleMenu, setIsVisibleMenu] = useState(true);
    const [showImage, setShowImage] = useState(urlImage);

    const { pathname } = useLocation();
    const isLogged = pathname === "/home" || pathname === "/perfil";
    const removeLinearGradient = pathname !== "/home" && pathname !== "/" && pathname !== "/perfil";
    
    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        setIsVisibleMenu(true);
    }, [pathname])

    return (
        <nav className={`${styles.menu} ${removeLinearGradient ? styles.removeLinearGradient : ""}`}>
            <Link to="/" className={`${pathname === "/home" || pathname === "/perfil" ? styles.isHidden : styles.logo}`} >
                <Logo />
            </Link>

            {isLogged && 
                <>
                    <div className={`${styles.btnMenu} ${isMenuOpen ? styles.open : ""}`} onClick={toggleMenu}>
                        <div className={styles.menuBar}></div>
                        <div className={styles.menuBar}></div>
                        <div className={styles.menuBar}></div>
                    </div>
                    <ul className={`${styles.list} ${isMenuOpen ? styles.open : ""}`}>
                        <li className={styles.listLinks}>
                            <span>
                                <NavLink 
                                    to="/home"
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
                            <img 
                                onClick={() => setIsVisibleMenu(!isVisibleMenu)}
                                className={styles.avatar} 
                                src={showImage} 
                                alt="Imagem do Avatar"
                            />
                            <ul className={`${styles.menuDropDow} ${isVisibleMenu ? "" : styles.isVisible}`}>
                                <li>
                                    <Link to="/perfil" className={styles.menuDropDowItem}>
                                        <Person className={styles.menuDropDowSVG}/>
                                        Meu Perfil
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className={styles.menuDropDowItem}>
                                        <Upload className={styles.menuDropDowSVG}/>
                                        Enviar Videos
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </>
            }
        </nav>
    )
}