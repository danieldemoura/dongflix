import { DonghuasDataContext } from "../../contexts/DonghuasDataContext";
import { useContext, useRef, useState } from "react";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";

export default function Profile() {
    const dataLogin = JSON.parse(localStorage.getItem("isLogin"));
    const donghuasData = useContext(DonghuasDataContext);
    const [login, setLogin] = useState(dataLogin);

    const tabRefs = [useRef(), useRef()];
    const tabContentRefs = [useRef(), useRef()];
    const [indexInfo, setIndexInfo] = useState(1);
    const info = [
        "Aqui você vai encontrar todas as obras que você marcou como favorito.",
        "Aqui contém todas as obras salvas no banco de dados, onde você pode editar ou deletar.",
    ]
    
    function addClass(indexTab) {
        tabRefs.forEach((tab, index) => {
            tab.current.classList.remove(styles.active);
            tabContentRefs[index].current.classList.remove(styles.active);
        });

        tabRefs[indexTab].current.classList.add(styles.active);
        tabContentRefs[indexTab].current.classList.add(styles.active);
        setIndexInfo(indexTab);
    }

    
    return (
        <article className={styles.article}>
            <div className={styles.banner}></div>
            <div className={styles.wrapper}>
                <figure className={styles.profile}>
                    <img className={styles.img} src={login.avatar} alt="Imagem de Perfil" />
                    <figcaption className={styles.legend}>
                        <h2 className={styles.title}>{login.name}</h2>
                        <span className={styles.email}>{login.email}</span>    
                    </figcaption>
                    <span className={styles.role}>Administrador</span>
                </figure>
                <div className={styles.card}>
                    <header className={styles.tabBar}>
                        <span 
                            className={styles.tab} 
                            onClick={() => addClass(0)}
                            ref={tabRefs[0]}
                        >
                            Favoritos
                        </span>
                        <span 
                            className={`${styles.tab} ${styles.active}`} 
                            onClick={() => addClass(1)}
                            ref={tabRefs[1]}
                        >
                                Banco de Dados
                        </span>
                    </header>
                    <p className={styles.info}>{ info[indexInfo] }</p>
                    <div className={styles.tabContent} ref={tabContentRefs[0]}>
                        oigndofgodjt
                    </div>
                    <div className={`${styles.tabContent} ${styles.active}`} ref={tabContentRefs[1]}>
                        {
                            donghuasData.map(donghua => {
                                return (
                                    <div className={styles.cardDonghua} key={donghua.id}>
                                        <p className={styles.donghuaName}>
                                            {donghua.title}
                                        </p>
                                        <div className={styles.cardPoster}>
                                            <Link to={`/donghua/${donghua.title}`} >
                                                <img 
                                                    className={styles.posterImg} 
                                                    src={donghua.poster}
                                                    alt={`Imagem do Donghua ${donghua.title}`} 
                                                />
                                            </Link>
                                            <div className={styles.cardButtons}>
                                                <Link to={`/editar-donghua/${donghua.title}`}>
                                                    <Icon 
                                                        className={styles.svg} 
                                                        icon="mdi:pencil-box" 
                                                        width="24" 
                                                        color="white" 
                                                    />
                                                </Link>
                                                <Icon
                                                    className={styles.svg}
                                                    icon="ic:baseline-delete"
                                                    width="24"
                                                    color="white"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </article>
    )
}