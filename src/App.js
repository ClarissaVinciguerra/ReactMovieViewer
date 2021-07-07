import { Route, Switch } from 'react-router-dom';
import MovieSearchPage from './pages/MovieSearch';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layouts/Layout';

function App() {
  return (
  <Layout>
    <Switch>
    <Route path='/' exact>
      <MovieSearchPage />
    </Route>
    <Route path='/favorites'>
      <FavoritesPage />
    </Route>
    </Switch>
  </Layout>
  );
}

export default App; 
