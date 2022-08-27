import { useEffect } from 'react';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { fetchReviews } from '../../store/api-actions';
import { getReviews } from '../../store/app-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import ReviewItem from '../review-item/review-item';
import ReviewsForm from '../reviews-form/reviews-form';

export default function Reviews() {
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isLoggedIn = authorizationStatus === AuthorizationStatus.Auth;
  const reviews = useAppSelector(getReviews)?.slice(0, 10);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchReviews());
    }

    return () => {
      isMounted = false;
    };
  }, []);

  const sortedReviews = reviews && reviews.sort(({date},{date: date2}) => Date.parse(date2) - Date.parse(date));

  if (!sortedReviews) {
    return <p>No reviews yet</p>;
  }

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{sortedReviews.length}</span></h2>
      <ul className="reviews__list">
        {
          sortedReviews.map((review) => <ReviewItem key={review.id} review={review}/>)
        }
      </ul>
      {isLoggedIn && <ReviewsForm />}
    </section>
  );
}
