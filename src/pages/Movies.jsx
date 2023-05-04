import { useState, useEffect } from 'react';
import { searchMovies } from 'service/API';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query === '') {
      return;
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
    });
  }, [query]);

  const handleInput = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const onSearch = e => {
    e.preventDefault();
    setQuery(searchQuery);
    setSearchQuery('');
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
              {title}
              <img src={poster} alt="movie" />
            </li>
          );
        })}
      </ul>
    </>
  );
};
