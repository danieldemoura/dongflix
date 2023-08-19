import { ReactComponent as Logo } from "../../assets/logo.svg"
import { ReactComponent as Search } from "../../assets/svg/search.svg"
import { ReactComponent as Bell } from "../../assets/svg/bell.svg"
import { ReactComponent as Profile } from "../../assets/svg/profile.svg"
import { menu, logo, list, link, active, containerIcons } from "./menu.module.css"
import { NavLink, useLocation } from "react-router-dom"

export default function Menu() {
    const { pathname } = useLocation();
    const isLogged = pathname === "/home";

    return (
        <nav className={menu}>
            <Logo className={logo} />

            {isLogged && 
                <>
                    <ul className={list}>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? `${link} ${active}` : `${link}`
                            }>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={link}>Séries</NavLink>
                        </li>
                    </ul>
                    <div className={containerIcons}>
                        <Search />
                        <Bell />
                        <Profile />
                    </div>
                </>
            }

        </nav>
    )
}