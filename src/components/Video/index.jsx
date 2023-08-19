import { containVideo } from "./video.module.css"

export default function Video() {
    return (
        <div className={containVideo}>
            <iframe
                style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", overflow: "hidden" }}
                type="text/html"
                src="https://www.dailymotion.com/embed/video/k4DE3bdU2zoS2Tz618Q?autoplay=1&controls=1"
                width="100%"
                height="100%"
                title="Dailymotion Video Player"
                allow="autoplay"
                frameBorder="0"
            ></iframe>
        </div>
    );
}
