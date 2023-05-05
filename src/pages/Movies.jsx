import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovies } from 'service/API';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');
  const location = useLocation();

  useEffect(() => {
    if (name) {
      setSearchQuery('');
      setQuery(name);
    }
  }, [name]);

  useEffect(() => {
    if (query === '') {
      return;
    }

    if (name) {
      setSearchQuery('');
      setQuery(name);
    }

    searchMovies(query).then(({ results }) => {
      const filteredResults = results.map(
        ({ poster_path, id, title, name }) => ({
          title: title || name,
          id,
          poster: `https://image.tmdb.org/t/p/w500${poster_path}`,
        })
      );
      setMovies(filteredResults);
      setSearchParams({ name: query });
    });
  }, [query, setSearchParams, name]);

  const handleInput = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const onSearch = e => {
    e.preventDefault();
    setQuery(searchQuery);
  };

  return (
    <>
      <form onSubmit={onSearch}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          required
          value={searchQuery}
          onChange={handleInput}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      <ul>
        {movies.map(({ title, id, poster }) => {
          return (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
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
