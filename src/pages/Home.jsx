import { useEffect, useState } from 'react';
import popularMovies from 'service/API';

export const Home = () => {
  const [title, setTitle] = useState([]);

  useEffect(() => {
    popularMovies().then(({ results }) => {
      const formattedData = results.map(({ title, name, id, poster_path }) => ({
        id,
        title: title || name,
        poster: `https://image.tmdb.org/t/p/w500${poster_path}`,
      }));
      setTitle(formattedData);
    });
  }, []);

  return (
    <>
      <ul>
        <h1>Trending today</h1>
        {title.map(({ title, id, poster }) => {
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
