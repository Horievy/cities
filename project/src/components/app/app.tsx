import {AppRoute, AuthorizationStatus} from '../../const';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {PlaceListItemType} from '../../types/mainTypes';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import PageNotFound from '../../pages/pageNotFound/pageNotFound';
import Property from '../../pages/property/property';
import PrivateRoute from '../privateRoute/privateRoute';

interface AppProps {
  placesList: PlaceListItemType[],
}

function App({placesList}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main placesList={placesList}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<Property/>}
        />
        <Route
          path="*"
          element={<PageNotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
