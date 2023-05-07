import { NavLink, Outlet } from 'react-router-dom';
import css from './SiteBar.module.css';
import { Suspense } from 'react';

const SiteBar = () => {
  return (
    <div>
      <nav className={css.container}>
        <NavLink
          className={({ isActive }) =>
            isActive ? css.link + ' ' + css.active : css.link
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? css.link + ' ' + css.active : css.link
          }
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SiteBar;
