import {PlaceListItemType} from '../../types/mainTypes';

export default function PlaceListItem({imgSrc, name, isBookmarked, price, priceText, type, mark, rating}: PlaceListItemType) {
  const MAX_RATING = 5;

  let markedBlock = null;
  const ratingInPercents = Math.round(rating) / MAX_RATING * 100;

  if (mark) {
    markedBlock = (
      <div className='place-card__mark'>
        <span>{mark}</span>
      </div>);
  }
  return (
    <article className='cities__card place-card'>
      {markedBlock}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <a href='#tbd'>
          <img className='place-card__image' src={imgSrc} width='260' height='200' alt='Place' />
        </a>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;{priceText}</span>
          </div>
          <button className={`${isBookmarked ? 'place-card__bookmark-button--active' : ''} button place-card__bookmark-button`} type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>{isBookmarked ? 'To bookmarks' : 'bebe'}</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{width: `${ratingInPercents}%`}}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <a href='#tbd'>{name}</a>
        </h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
}
