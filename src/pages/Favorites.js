import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import FavoritesList from '../components/movies/FavoritesList';
import classes from './Favorites.module.css';

function FavoritesPage() {
    const favoritesContext = useContext(FavoritesContext);
    let picks = favoritesContext.favorites.length

    let content;

    if (favoritesContext.totalFavorites === 0) {
        content = <p>Your favorites list is currently empty.</p>
    } else {
        content = <FavoritesList favorites={favoritesContext.favorites} />
    }
    
    return <section>
        <div className={classes.header}>
            <div className={classes.alignLeft}>
                <h2>Your Favorites</h2>
            </div>

            <div className={classes.alignRight}>
                <h4>Picks:{picks}/5</h4>
            </div>
        </div>
        {content}
    </section>;
}

export default FavoritesPage;