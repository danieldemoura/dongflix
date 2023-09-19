import { createContext, useState } from "react";

export const FavoriteContext = createContext({});

export function FavoriteContextProvider({ children }) {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    const [favoriteList, setFavoriteList] = useState(favorites ? favorites : []);

    function toggleFavorite(donghua) {
        if(favoriteList.includes(donghua)) {
            const removedFavorite = favoriteList.filter(favorite => favorite !== donghua);
            localStorage.setItem("favorites", JSON.stringify(removedFavorite));
            setFavoriteList(removedFavorite);

        } else {
            const addFavorite = [...favoriteList, donghua];
            localStorage.setItem("favorites", JSON.stringify(addFavorite));
            setFavoriteList(addFavorite);
        }
    }

    return (
        <FavoriteContext.Provider value={{toggleFavorite, favoriteList}}>
            {children}
        </FavoriteContext.Provider>
    )
}