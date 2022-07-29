import {AppRoute, AuthorizationStatus} from '../../const';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {City, Offer, Points} from '../../types/mainTypes';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import PageNotFound from '../../pages/pageNotFound/pageNotFound';
import Property from '../../pages/property/property';
import PrivateRoute from '../privateRoute/privateRoute';

interface AppProps {
  placesList: Offer[],
  offers: Offer[],
  favoriteOffers: Offer[],
  points: Points,
  city: City
}

function App({placesList, offers, favoriteOffers, points, city}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main
              placesList={placesList}
              points={points}
              city={city}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites offers={favoriteOffers}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Room}
          element={<Property offers={offers}/>}
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
