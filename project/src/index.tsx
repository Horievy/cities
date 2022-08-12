import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {favoriteOffers} from './mocks/favorite-offers';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchOffers} from './store/api-actions';

store.dispatch(fetchOffers());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App favoriteOffers={favoriteOffers} />
    </Provider>
  </React.StrictMode>,
);
