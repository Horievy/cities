import {Offer, SearchFunc} from '../../types/mainTypes';
import {useNavigate} from 'react-router-dom';
import Rating from '../rating/rating';
import { AppRoute } from '../../const';
import BookmarkBtn from '../bookmark-btn/bookmark-btn';

interface PlaceListItemProps {
  place: Offer,
  classPrefix: string,
  onPlaceItemHover?: SearchFunc
}

export default function PlaceListItem({place, classPrefix, onPlaceItemHover}:PlaceListItemProps) {
  const routeLink:string = AppRoute.Room.replace(':id', place.id.toString());
  const navigate = useNavigate();

  const {isPremium, price, rating, title, type, previewImage} = place ;

  function handlePlaceItemClick(e: React.MouseEvent<HTMLElement>) {
    const target = e.target as HTMLElement;

    if (!target.closest('.place-card__bookmark-button')) {
      navigate(routeLink);
    }
  }

  function handlePlaceItemHover() {
    onPlaceItemHover && onPlaceItemHover(place);
  }

  return (
    <article className={`${classPrefix}__card place-card`}
      onClick={handlePlaceItemClick}
      onMouseEnter={handlePlaceItemHover}
    >
      {
        isPremium &&
          <div className='place-card__mark'>
            <span>Premium</span>
          </div>
      }
      <div className={`${classPrefix}__image-wrapper place-card__image-wrapper`}>
        <img className='place-card__image' src={previewImage} width='260' height='200' alt='Place' />
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <BookmarkBtn
            placeId={place.id}
            classPrefix='place-card'
          />
        </div>
        <Rating rating={rating}
          classPrefix='place-card'
        />
        <h2 className='place-card__name'>{title}</h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
}
