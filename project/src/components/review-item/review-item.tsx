import { Review } from '../../types/mainTypes';
import Rating from '../rating/rating';

interface ReviewItemProps {
  review: Review,
}
export default function ReviewItem({review}: ReviewItemProps) {
  const {user:{name, avatarUrl}, rating, comment, date} = review;
  const modifyedDate = new Date(date).toLocaleString('default',{ year: 'numeric', month: 'long'});

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <Rating classPrefix='reviews' rating={rating}/>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{modifyedDate}</time>
      </div>
    </li>
  );
}
