import { Link } from 'react-router-dom';
import {AppRoute} from '../../const';

import Header from '../../components/header/header';

export default function PageNotFound(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <div className='cities'>
          <div className='cities__places-container container cities__page-not-found'>
            <h1>404 Page not found ¯\_(ツ)_/¯</h1>
            <Link className="cities__page-not-found-link" to={AppRoute.Main}>
              Return to the main page
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
