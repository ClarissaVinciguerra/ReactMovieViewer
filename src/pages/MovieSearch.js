import { useState } from 'react'; 
import MovieSearchForm from "../components/forms/MovieSearchForm";
import MovieItem from "../components/movies/MovieItem";

const API_ENDPOINT = "http://www.omdbapi.com/?i=tt3896198&apikey=72769df6";

function MovieSearchPage() {

    const [isLoading, setIsLoading] = useState(false);
    const [movieFound, setMovieFound] = useState();

    let onSearch = (movieSearchData) => {
        setIsLoading(true);
        fetch(`${API_ENDPOINT}&t=${movieSearchData.title}&y=${movieSearchData.year}`).then(response => {
            response.json().then(function(data) {
                setMovieFound(data);
                setIsLoading(false);
            });
        }).catch(error => {
            setIsLoading(false);
            setMovieFound();
        });
    };

    let onClear = () => {
        setMovieFound();
    };

    return <section>
        <MovieSearchForm onSearch={onSearch} isLoading={isLoading}/>
        {movieFound && <MovieItem movie={movieFound} onClear={onClear}/> }
     </section>
} 

export default MovieSearchPage;