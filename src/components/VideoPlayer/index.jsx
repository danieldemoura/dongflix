import useYouTubeAPIContext from "../../hooks/useYouTubeAPIContext";
import styles from "./VideoPlayer.module.css";
import YouTube from 'react-youtube';


export default function VideoPlayer({ trailer }) {
  const { setYouTubeAPI } = useYouTubeAPIContext();

  const opts = {
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: trailer,
      rel: 0,
      controls: 0,
      showinfo: 0,
      modestbranding: 1, // Não exibi o logo do YouTube na barra de controles
      iv_load_policy: 3, // Não exibi as anotações (legenda)
      fs: 0, // Desabilita o modo de tela cheia
    },
  }

  return (
    <div className={styles.containVideo}>
        <YouTube 
          iframeClassName={styles.player} 
          videoId={trailer} 
          opts={opts}
          onReady={(event) => {
            setYouTubeAPI(event.target);
            event.target.setPlaybackQuality("hd1080");
          }}
        />
    </div>
  );
}
