import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import PlaceList from '../../components/place-list/place-list';
import Rating from '../../components/rating/rating';
import Reviews from '../../components/reviews/reviews';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchNearestPlaces, fetchOffer } from '../../store/api-actions';
import Loader from '../../components/loader/loader';
import {setPlaceId } from '../../store/action';
import { getCurrentPlace, getNearestPlaces } from '../../store/app-data/selectors';
import BookmarkBtn from '../../components/bookmark-btn/bookmark-btn';
import Map from '../../components/map/map';
import { getMapPoints } from '../../utils/helpers';
import { Offer, Points } from '../../types/mainTypes';


export default function Property(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = Number(params.id) ?? 0;

  const currentPlace = useAppSelector(getCurrentPlace) as Offer;
  const nearestPlaces = useAppSelector(getNearestPlaces) as Offer[];

  const placesList = nearestPlaces && currentPlace && [...nearestPlaces, currentPlace] as Offer[];
  const points: Points = placesList && getMapPoints(placesList);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(setPlaceId(id));
      window.scrollTo(0, 0);

      dispatch(fetchOffer());
      dispatch(fetchNearestPlaces());
    }

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (!currentPlace) {
    return <Loader />;
  }
  const {images, bedrooms, description, goods, host:{isPro, avatarUrl, name}, isPremium, maxAdults, price, rating, title, type, city} = currentPlace;
  const imagesToRender = images.slice(0, 6);

  return (
    <React.Fragment>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {imagesToRender.map((image) => (
                  <div key={image} className="property__image-wrapper">
                    <img className="property__image" src={image} alt={type} />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {
                  isPremium ?
                    <div className="property__mark">
                      <span>Premium</span>
                    </div> : null
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <BookmarkBtn
                    placeId={id}
                    classPrefix='property'
                  />
                </div>
                <Rating rating={rating}
                  classPrefix='property'
                  isRatingValue
                />
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {
                      goods.map((item) => (
                        <li key={item} className="property__inside-item">
                          {item}
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host" />
                    </div>
                    <span className="property__user-name">
                      {name}
                    </span>
                    {isPro && <span className="property__user-status">Pro</span>}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <Reviews/>
              </div>
            </div>
            <section className="property__map map">
              <Map city={city} points={points} selectedPoint={currentPlace}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              {nearestPlaces && <PlaceList placesList={nearestPlaces} classPrefix='near-places'/>}
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}
