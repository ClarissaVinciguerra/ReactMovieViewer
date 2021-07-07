import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favorite) => {},
    removeFavorite: (movieTitle) => {},
    itemIsFavorite: (movieTitle) => {},
    allFavorites: () => {}

});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] =  useState([]);

    function addFavoriteHandler(favorite) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favorite);
        });
    }

    function removeFavoriteHandler(movieTitle) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(movie => movie.title !== movieTitle);
        });
    } 

    function itemIsFavoriteHandler(movieTitle) {
        return userFavorites.some(movie => movie.title === movieTitle)
    }

    function fetchAllFavoritesHandler() {
        return userFavorites.values()
    }


    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
        allFavorites: fetchAllFavoritesHandler
    };

    
    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>; 
}

export default FavoritesContext;