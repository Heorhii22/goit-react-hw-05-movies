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
      console.log(formattedData);
      setTitle(formattedData);
    });
  }, []);

  return (
    <>
      <ul>
        Trending today
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