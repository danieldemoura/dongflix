import { ReactComponent as Sound } from "./som.svg"
import { ReactComponent as Mute } from "./mute.svg"
import { useState } from "react";
import styles from "./ButtonSound.module.css"
import useYouTubeAPIContext from "../../hooks/useYouTubeAPIContext";

export default function ButtonSound() {
    const { youTube } = useYouTubeAPIContext();
    const [isMuted, setIsMuted] = useState(false);

    function toggleSound() {
        if (youTube) {
            isMuted ? youTube.unMute() : youTube.mute();
            setIsMuted(!isMuted);
        }
    }

    return (
        <div className={styles.sound} onClick={toggleSound}>
            { 
                isMuted ? <Mute /> : <Sound />
            }  
        </div>
    )
} 