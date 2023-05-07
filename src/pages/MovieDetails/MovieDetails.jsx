import { Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import API from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [item, setItem] = useState(null);
  const location = useLocation();
  const [backLinkHref] = useState(location.state?.from ?? '/');

  useEffect(() => {
    API.getMovie(movieId)
      .then(res => res.json())
      .then(res => setItem(res));
  }, [movieId]);

  if (!item) {
    return;
  }
  const {
    backdrop_path,
    title,
    poster_path,
    overview,
    genres,
    popularity,
    release_date,
  } = item;
  const img = backdrop_path ? backdrop_path : poster_path;
  const year = release_date.split('-')[0];
  return (
    <>
      <NavLink className={css.link} to={backLinkHref}>
        Back to movies
      </NavLink>
      <div className={css.container}>
        <img
          className={css.poster}
          src={'https://image.tmdb.org/t/p/w500' + img}
          alt={title}
        />
        <div className={css.details}>
          <h1 className={css.title}>{`${title}(${year})`}</h1>
          <p>{`User score ${Math.round(popularity)}`}</p>
          <b>Overview</b>
          <p>{overview}</p>
          <b>Genres</b>
          <p>{genres.map(genre => genre.name).join(' ')}</p>
        </div>
      </div>

      <ul className={css.options}>
        <li>
          <p className={css.advance}>Addition information</p>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.link + ' ' + css.active : css.link
            }
            to="cast"
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.link + ' ' + css.active : css.link
            }
            to="reviews"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
