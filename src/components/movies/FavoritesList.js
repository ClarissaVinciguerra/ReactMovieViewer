import FavoriteItem from './FavoriteItem';
import classes from './FavoriteItem.module.css';

function FavoritesList(props) {
    return <div className={classes.favoriteCards}>
        {props.favorites.map((favorite) => (
        <FavoriteItem 
            key={favorite.title} 
            image={favorite.poster} 
            title={favorite.title} 
         />
         ))}
    </div>;
}

export default FavoritesList;