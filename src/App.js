import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Authors from './pages/Authors';
import Books from './pages/Books';
import NotFoundView from './pages/NotFoundView';
import BookDetailsView from './pages/BookDetailsView';
import routes from './routes';
import AppBar from './components/AppBar';

const App = () => (
  <>
    <AppBar />
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route path={routes.author} component={Authors} />
      <Route exact path={routes.books} component={Books} /> //можно поменять
      <Route path={routes.bookDetails} component={BookDetailsView} />
      местами но нужно тонда поставить exact
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;

// http://localhost:3000/react-test
