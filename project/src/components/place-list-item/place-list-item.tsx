import {Offer, SearchFunc} from '../../types/mainTypes';
import {Link} from 'react-router-dom';
import Rating from '../rating/rating';
import { AppRoute } from '../../const';

interface PlaceListItemProps {
  place: Offer,
  classPrefix: string,
  getSelectedOffer?: SearchFunc
}

export default function PlaceListItem({place, classPrefix, getSelectedOffer}:PlaceListItemProps) {
  const routeLink:string = AppRoute.Room.replace(':id', place.id.toString());

  const {isPremium, price, rating, title, type, previewImage, isFavorite} = place ;

  function onItemHover() {
    getSelectedOffer && getSelectedOffer(place);
  }

  return (
    <article className={`${classPrefix}__card place-card`}
      onMouseEnter={onItemHover}
    >
      {
        isPremium &&
          <div className='place-card__mark'>
            <span>Premium</span>
          </div>
      }
      <div className={`${classPrefix}__image-wrapper place-card__image-wrapper`}>
        <Link to={routeLink}>
          <img className='place-card__image' src={previewImage} width='260' height='200' alt='Place' />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className={`${isFavorite ? 'place-card__bookmark-button--active' : ''} button place-card__bookmark-button`} type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>{isFavorite ? 'To bookmarks' : 'bebe'}</span>
          </button>
        </div>
        <Rating rating={rating}
          classPrefix='place-card'
        />
        <h2 className='place-card__name'>
          <a href='#tbd'>{title}</a>
        </h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
}
