const popularMovies = async () => {
  const KEY = 'api_key=2bf3d5806d1a2c8f93fa0a438ca34dc9';
  const POPULAR = 'https://api.themoviedb.org/3/trending/all/week?';

  const res = await fetch(`${POPULAR}${KEY}`);
  return await res.json();
};

export default popularMovies;
