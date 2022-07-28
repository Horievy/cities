import { Review } from '../../types/mainTypes';
import ReviewItem from '../review-item/review-item';
import ReviewsForm from '../reviews-form/reviews-form';

interface ReviewsProps {
  reviews: Review[],
}
export default function Reviews({reviews}: ReviewsProps) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => <ReviewItem key={review.id} review={review}/>)
        }
      </ul>
      <ReviewsForm />
    </section>
  );
}
