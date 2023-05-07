import Notiflix from 'notiflix';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovies } from 'service/API';

export const Movies = () => {
  const [typedQuery, setTypedQuery] = useState('');
  const [collection, setCollection] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedParams = searchParams.get('query');
  const location = useLocation();

  const onHandleInputChange = e => {
    setTypedQuery(e.currentTarget.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: typedQuery });
  };

  useEffect(() => {
    if (searchedParams === null) {
      return;
    }

    searchMovies(searchedParams)
      .then(({ results }) => {
        console.log(results);
        if (results.length === 0) {
          Notiflix.Notify.failure(
            'We are unable to find anything by your query'
          );
        }
        const filteredResults = results.map(
          ({ poster_path, id, title, name }) => ({
            title: title || name,
            id,
            poster: `https://image.tmdb.org/t/p/w500${poster_path}`,
          })
        );

        setCollection(filteredResults);
      })
      .catch(err => {
        console.log(err);
      });
  }, [searchedParams]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          required
          value={typedQuery}
          onChange={onHandleInputChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      <ul>
        {collection.map(({ title, id, poster }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
              {poster !== 'https://image.tmdb.org/t/p/w500null' ? (
                <img src={poster} alt="movie" />
              ) : (
                <p>Image not found</p>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};
