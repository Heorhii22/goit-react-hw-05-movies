import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Movie } from 'service/API';

export function MovieInfo() {
  const [movieInfo, setMovieInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Movie(id).then(
      ({ title, name, poster_path, overview, genres, vote_average }) => {
        const filteredGenres = genres.map(genre => {
          return genre.name;
        });
        const info = {
          title: title || name,
          id,
          genre: filteredGenres,
          overview,
          rating: vote_average.toFixed(1),
          poster: `https://image.tmdb.org/t/p/w500${poster_path}`,
        };

        setMovieInfo(info);
      }
    );
  }, [id]);

  return (
    <>
      <h2>{movieInfo.title}</h2>
      <p>{movieInfo.rating}</p>
      <img src={movieInfo.poster} alt="movie" />
      <p>{movieInfo.overview}</p>
      <ul>
        {movieInfo.genre &&
          movieInfo.genre.map((genre, index) => <li key={index}>{genre}</li>)}
      </ul>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
