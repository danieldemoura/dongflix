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
    const [showImage, setShowImage] = useState();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisibleMenu, setIsVisibleMenu] = useState(true);

    const { pathname } = useLocation();
    const isLogged = pathname === "/home" || pathname === "/perfil" || pathname.startsWith("/donghua/");
    const removeLinearGradient = pathname !== "/home" && pathname !== "/" && pathname !== "/perfil" && !pathname.startsWith("/donghua/");
    const showLogo = pathname === "/home" || pathname === "/perfil" || pathname.startsWith("/donghua/");

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        setIsVisibleMenu(true);

        if(localStorage.getItem("isLogin")) {
            const {username} = JSON.parse(localStorage.getItem("isLogin"));
    
            fetch(`https://api.github.com/users/${username}`)
            .then(data => data.json())
            .then(username => setShowImage(username.avatar_url))
            .catch(error => console.log(error))
        }
        
    }, [pathname])


    return (
        <nav className={`${styles.menu} ${removeLinearGradient ? styles.removeLinearGradient : ""}`}>
            <Link to="/" className={`${showLogo ? styles.isHidden : styles.logo}`} >
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
                            {showImage &&
                                <img 
                                    onClick={() => setIsVisibleMenu(!isVisibleMenu)}
                                    className={styles.avatar} 
                                    src={showImage} 
                                    alt="Imagem do Avatar"
                                />
                            }
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