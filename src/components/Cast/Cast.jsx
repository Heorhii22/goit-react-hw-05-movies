import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MovieActors } from 'service/API';

export function Cast() {
  const { id } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    MovieActors(id).then(credits => {
      const filteredCast = credits.cast.map(
        ({ character, name, profile_path }) => ({
          name,
          character,
          profile: profile_path,
        })
      );
      setActors(filteredCast);
    });
  }, [id]);

  if (actors.length === 0) {
    return <p>No actors list available</p>;
  }

  return (
    <ul>
      {actors.map(({ character, name, profile }, index) => {
        return (
          <li key={index}>
            <h3>{name}</h3>
            <p>{character}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile}`}
              alt="actor"
            />
          </li>
        );
      })}
    </ul>
  );
}
