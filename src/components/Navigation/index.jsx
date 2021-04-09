import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
  return (
    <nav className="nav nav-pills">
      <NavLink
        exact
        to={routes.home}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Home
      </NavLink>

      <NavLink
        to={routes.author}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Authors
      </NavLink>

      <NavLink
        to={routes.books}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Books
      </NavLink>
    </nav>
  );
};

export default Navigation;
