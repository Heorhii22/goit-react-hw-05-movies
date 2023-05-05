const KEY = 'api_key=2bf3d5806d1a2c8f93fa0a438ca34dc9';

const popularMovies = async () => {
  const POPULAR = 'https://api.themoviedb.org/3/trending/all/week?';

  const res = await fetch(`${POPULAR}${KEY}`);
  return await res.json();
};

export const searchMovies = async query => {
  const SEARCHED = `https://api.themoviedb.org/3/search/movie?${KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

  const res = await fetch(SEARCHED);
  return await res.json();
};

export const Movie = async id => {
  const MOVIE = `https://api.themoviedb.org/3/movie/${id}?${KEY}&language=en-US`;

  const res = await fetch(MOVIE);
  return await res.json();
};

export const MovieActors = async id => {
  const CREDITS = `https://api.themoviedb.org/3/movie/${id}/credits?${KEY}&language=en-US`;

  const res = await fetch(CREDITS);
  return await res.json();
};

export const MovieReviews = async id => {
  const REWIEWS = `https://api.themoviedb.org/3/movie/${id}/reviews?${KEY}&language=en-US&page=1`;

  const res = await fetch(REWIEWS);
  return await res.json();
};

export default popularMovies;
