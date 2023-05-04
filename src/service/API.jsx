const KEY = 'api_key=2bf3d5806d1a2c8f93fa0a438ca34dc9';

const popularMovies = async () => {
  const POPULAR = 'https://api.themoviedb.org/3/trending/all/week?';

  const res = await fetch(`${POPULAR}${KEY}`);
  return await res.json();
};

export const searchMovies = async query => {
  const SEARCHED = `https://api.themoviedb.org/3/search/movie?${KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

  const res = await fetch(`${SEARCHED}${KEY}`);
  return await res.json();
};

export default popularMovies;
