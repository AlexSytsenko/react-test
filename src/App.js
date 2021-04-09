import { Route, NavLink, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Authors from './pages/Authors';
import Books from './pages/Books';
import NotFoundView from './pages/NotFoundView';
import BookDetailsView from './pages/BookDetailsView';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/authors"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Authors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/books"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Books
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/authors" component={Authors} />
      <Route path="/books/:bookId" component={BookDetailsView} />
      <Route exact path="/books" component={Books} /> //можно поменять местами
      но нужно тонда поставить exact
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;

// http://localhost:3000/react-test
