import { Route, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// import Home from './pages/Home';
// import Authors from './pages/Authors';
// import Books from './pages/Books';
// import NotFoundView from './pages/NotFoundView';
// import BookDetailsView from './pages/BookDetailsView';
import routes from './routes';
import AppBar from './components/AppBar';

// const loader = () => import('./pages/Home');

const Home = lazy(() =>
  import('./pages/Home' /* webpackChunkName: "home-page" */),
);
const Authors = lazy(() =>
  import('./pages/Authors' /* webpackChunkName: "authors-page" */),
);
const Books = lazy(() =>
  import('./pages/Books' /* webpackChunkName: "books-page" */),
);
const BookDetailsView = lazy(() =>
  import('./pages/BookDetailsView' /* webpackChunkName: "bookDetails-page" */),
);
const NotFoundView = lazy(() =>
  import('./pages/NotFoundView' /* webpackChunkName: "notFoundView-page" */),
);

const App = () => (
  <>
    <AppBar />

    {/* <button onClick={() => loader().then(console.log)}>Загрузить Home</button> */}
    <Suspense fallback={<h1>Загружаем...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.author} component={Authors} />
        <Route exact path={routes.books} component={Books} />
        <Route path={routes.bookDetails} component={BookDetailsView} />
        местами но нужно тонда поставить exact
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;

// http://localhost:3000/react-test
