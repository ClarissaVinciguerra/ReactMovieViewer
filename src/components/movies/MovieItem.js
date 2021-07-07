import { useContext } from 'react';
import classes from './MovieItem.module.css';
import FavoritesContext from '../../store/favorites-context';

const MAX_STARS = 5;
function MovieItem(props) {
    
    const favoritesContext = useContext(FavoritesContext);
    const itemIsFavorite = favoritesContext.itemIsFavorite(props.movie.Title);
    const rating = Math.round((parseFloat(props.movie.imdbRating))/2);
    const genreArr = props.movie.Genre.split(',');
   
    let ratingArr = [];
   
    //adds star images for rating system
    for (let i = 0; i < MAX_STARS; i++) {
        if (i < rating) {
            ratingArr.push(<img src= {`${process.env.PUBLIC_URL}/goldStar.jpeg`} alt="Star"/>);
        } else {
            ratingArr.push(<img src= {`${process.env.PUBLIC_URL}/emptyStar.jpeg`} alt="Star"/>);
        }
    }
    
    let onClickToggleFavorites = () => {
        if (itemIsFavorite) {
            favoritesContext.removeFavorite(props.movie.Title);
        } else {
            favoritesContext.addFavorite({
                title: props.movie.Title,
                poster: props.movie.Poster,
                rating: props.movie.imdbRating,
                director: props.movie.Director, 
                runtime: props.movie.Runtime,
                genre: props.movie.Genre,
                plot: props.movie.Plot
            });
        }
    };
    
    return (
        <div className={classes.container}>
            <section className={classes.box}>
                <div className={classes.header}>
                    <h3>Results</h3>
                </div>
                <div className={classes.image}>
                <img src={props.movie.Poster} alt={props.movie.Title} />
                </div>
                <div className={classes.content}>
                    <h1>{props.movie.Title+' ('+ props.movie.Year + ')'}</h1>

                    <div className={classes.rating}>
                        {ratingArr}
                    </div>

                    <h3>{'Director: ' + props.movie.Director}</h3>
                    <h3>{'Runtime: ' + props.movie.Runtime}</h3>
                    <h3>{'Genre: '}</h3> 
                    {genreArr.map((genre, i) => {
                          return <div key={i} className={classes.genre}>
                                {genre}
                             </div>;
                        } 
                    )}
                </div> 
                <div className={classes.plot}>
                    <h3>{props.movie.Plot}</h3>
                </div>
                <div className={classes.clearAction}>
                    <button onClick={ props.onClear }>Clear</button>
                </div>
                <div className={classes.actions}>
                 {favoritesContext.favorites.length < 5 && <button onClick={onClickToggleFavorites}>
                     {itemIsFavorite ? 'Remove from Favorites' : 'Add To Favorites'}
                </button>}
                </div>
            </section>
        </div>
    );  
}
 
export default MovieItem;