import {Route, BrowserRouter, Routes} from 'react-router-dom';
// import FavoritesEmptyPage from '../../pages/favorites-empty-page/favorites-empty-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
// import MainEmptyPage from '../../pages/main-empty-page/main-empty-page';
import MainPage from '../../pages/main-page/main-page';
// import PropertyNotLoggedPage from '../../pages/property-not-logged-page/property-not-logged';
import PropertyPage from '../../pages/property-page/property-page';
import Page404 from '../404-page/404-page';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../../components/private-route';


type AppScreenProps = {
  places: number;
}

function App({places}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage places={places} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyPage/>}
        />
        <Route
          path="*"
          element={<Page404/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
