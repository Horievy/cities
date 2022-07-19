import { Link } from 'react-router-dom';
import {AppRoute} from '../../const';

import Header from '../../components/header/header';


export default function PageNotFound(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header isNavHidden />
      <main className="page__main page__main--index">
        <h1 className='visually-hidden'>Cities</h1>

        <div className='tabs'>
          <section className='locations container'>
            <ul className='locations__list tabs__list'>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='#tbd'>
                  <span>Paris</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='#tbd'>
                  <span>Cologne</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='#tbd'>
                  <span>Brussels</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item tabs__item--active' href='#tbd'>
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='#tbd'>
                  <span>Hamburg</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='#tbd'>
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
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
