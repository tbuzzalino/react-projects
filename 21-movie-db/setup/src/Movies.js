import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';
const url =
    'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
    const { movies, loading } = useGlobalContext();

    if (loading) {
        return <div className='loading'></div>;
    }
    console.log(movies);
    return (
        <section className='movies'>
            {movies.map((movie) => {
                const {
                    imdbID: id,
                    Poster: poster,
                    Title: name,
                    Year: year,
                } = movie;
                return (
                    <Link to={`/movies/${id}`} key={id} className='movie'>
                        <article>
                            <img src={poster} alt={name} />
                            <div className='movie-info'>
                                <h4 className='title'>{name}</h4>
                                <p>{year}</p>
                            </div>
                        </article>
                    </Link>
                );
            })}
        </section>
    );
};

export default Movies;
