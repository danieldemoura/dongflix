import { useEffect, useState } from "react";
import styles from "./CardDonghua.module.css";
import { Link } from "react-router-dom";

export function CardDonghua({donghuasList, currentDonghua}) {
    const [currentGenre, setCurrentGenre] = useState();
    const [relatedDonghuas, setRelatedDonghuas] = useState([]);
    const [updateComponent, setUpdateComponent] = useState(false);

    function getCurrentGenre() {
        if(currentDonghua.genres) {
            const genres = currentDonghua.genres.split(", ");
            const randomGenre = Math.floor(Math.random() * (genres.length - 1));
            setCurrentGenre(genres[randomGenre]);
            setUpdateComponent(!updateComponent);
        }
    }

    function getRelatedDonghuas() {
        if(donghuasList) {
            const donghuas = donghuasList.filter(donghua => donghua.title !== currentDonghua.title)
            const genres = donghuas.filter(donghua => donghua.genres.includes(currentGenre));
            setRelatedDonghuas(genres);
        }
    }

    useEffect(() => {
        getCurrentGenre();

    }, [currentDonghua])


    useEffect(() => {
        getRelatedDonghuas();

    },[donghuasList, updateComponent])
    
    
    return (
        <ul className={styles.relatedDonghuas}>
            {relatedDonghuas.length > 0 &&
                relatedDonghuas.slice(0, 6).map(donghua => {
                    return (
                        <Link to={`/donghua/${donghua.title}`} key={donghua.id}>
                            <li className={styles.item}>
                                <img className={styles.thumbnail} src={donghua.banner} />
                            </li>
                        </Link>
                        )
                    })
            }
        </ul>
    )
}