import { useContext } from 'react'; 
import FavoritesContext from '../../store/favorites-context';
import classes from './FavoriteItem.module.css';

function FavoriteItem(props) {
    const favoritesContext = useContext(FavoritesContext);

    const onRemoveFromFavorites= () => {
        favoritesContext.removeFavorite(props.title);
    };

    return <div className={classes.card}>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.actions}>        
            <button onClick={onRemoveFromFavorites}>
                <img src= {`${process.env.PUBLIC_URL}/deleteImg.png`} alt="Delete" />
            </button>
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
        </div>        
    </div>;  
}
 
export default FavoriteItem;