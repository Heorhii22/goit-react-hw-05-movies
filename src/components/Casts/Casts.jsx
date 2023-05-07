import { useEffect, useState } from 'react';
import css from './Casts.module.css';
import API from 'services/api';
import { useParams } from 'react-router-dom';
import Thumbnail from 'components/Thumbnail/Thumbnail';

const Casts = () => {
  const { movieId } = useParams();
  const [items, setItems] = useState(null);

  useEffect(() => {
    API.getCast(movieId)
      .then(res => res.json())
      .then(res => setItems(res.cast))
      .catch(err => setItems([]));
  }, [movieId]);

  if (!items) {
    return;
  }
  if (items.length === 0) {
    return <div>Sorry, but cast not found</div>;
  }

  return (
    <>
      <ul className={css.container}>
        {items.map(({ character, name, profile_path }) => (
          <li key={name}>
            {profile_path ? (
              <img
                src={'https://image.tmdb.org/t/p/w185' + profile_path}
                alt={name}
              />
            ) : (
              <div className={css.thumb}>
                <Thumbnail noText="NO AVATAR" />
              </div>
            )}
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Casts;
