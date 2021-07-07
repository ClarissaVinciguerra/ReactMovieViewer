import { useRef } from 'react';
import classes from './MovieSearchForm.module.css';

function MovieSearchForm(props) {
    const titleInputRef = useRef();
    const releaseYearInputRef = useRef();
    const searchFormRef = useRef();

    let submitHandler = (event) => {
        event.preventDefault(); 

        const enteredTitle = titleInputRef.current.value;
        const enteredReleaseYear = releaseYearInputRef.current.value;

        const movieSearchData = {
            title: enteredTitle,
            releaseYear: enteredReleaseYear,
        };
        props.onSearch(movieSearchData);
        // Clear form after search since it doesn't make sense to search the same movie twice
        searchFormRef.current.reset();
    };

    return <div className={classes.movieSearchContainer}>
        <section className={classes.box}>
            <div className={classes.header}>
                <h3>Search</h3>
            </div>
            <form ref={searchFormRef} className={classes.form} onSubmit={submitHandler}>
                <div className ={classes.control}>
                    <label htmlFor='title'>Movie Title</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>
                <div className ={classes.control}>
                    <label htmlFor='releaseYear'>Release Year</label>
                    <input type="text" required id="releaseYear" ref={releaseYearInputRef} />
                </div>
                <div className ={classes.actions}>
                    {!props.isLoading && <button type="submit">Search</button>}
                    {props.isLoading && <h1>Loading</h1>}
                </div>
            </form>
        </section>
    </div>;
}

export default MovieSearchForm;