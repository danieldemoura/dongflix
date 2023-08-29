import { useContext } from "react";
import { YouTubeAPIContext } from "../contexts/YouTubeAPIContext";

export default function useYouTubeAPIContext() {
    const context = useContext(YouTubeAPIContext);

    if(context === undefined) {
        throw new Error("Você não está no contexto");
    }

    return context
}