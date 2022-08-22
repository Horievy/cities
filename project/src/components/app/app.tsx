import {AppRoute} from '../../const';
import {Route, Routes} from 'react-router-dom';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import PageNotFound from '../../pages/pageNotFound/pageNotFound';
import Property from '../../pages/property/property';
import PrivateRoute from '../privateRoute/privateRoute';
import { useAppSelector } from '../../hooks/reduxHooks';
import Loader from '../loader/loader';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getDataLoadingStatus } from '../../store/app-data/selectors';

function App(): JSX.Element {
  const isDataLoading = useAppSelector(getDataLoadingStatus);

  if (isDataLoading) {
    return <Loader />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main/>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
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
    </HistoryRouter>
  );
}

export default App;
