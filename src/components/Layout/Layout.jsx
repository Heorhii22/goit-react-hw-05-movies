import { Link, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export function Layout() {
  return (
    <>
      <ul className={css.site_nav}>
        <li className={css.site_nav__link}>
          <Link to="/">Home</Link>
        </li>
        <li className={css.site_nav__link}>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
