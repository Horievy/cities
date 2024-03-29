import { useState, useEffect } from 'react';
import { CommentLength } from '../../const';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addReview } from '../../store/api-actions';
import { ReviewData } from '../../types/mainTypes';

const INITIAL_FORM_DATA:ReviewData = {
  rating: 0,
  comment: ''
};

export default function ReviewsForm() {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<ReviewData>(INITIAL_FORM_DATA);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      isReadyForSubmit(formData);
    }

    return () => {
      isMounted = false;
    };
  });

  function handleFormSubmit(e:React.SyntheticEvent): void {
    e.preventDefault();

    dispatch(addReview(formData));
    setFormData(INITIAL_FORM_DATA);
    disableReviewStars();
  }

  function disableReviewStars() {
    const checkedRadioInput = document.querySelector('.form__rating-input.visually-hidden:checked') as HTMLInputElement | null;

    if (checkedRadioInput !== null) {
      checkedRadioInput.checked = false;
    }
  }

  function handleFormChange(e:React.SyntheticEvent): void {
    const target = e.target as HTMLInputElement;

    target.checked
      ? setFormData({...formData, rating: +target.value})
      : setFormData({...formData, comment: target.value});
  }

  function isReadyForSubmit({rating, comment}: ReviewData): void {
    rating > INITIAL_FORM_DATA.rating && comment.length >= CommentLength.Min && comment.length < CommentLength.Max
      ? setDisabled(false)
      : setDisabled(true);
  }

  return (
    <form onChange={handleFormChange} onSubmit={handleFormSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleFormChange} value={formData.comment}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay in range between <b className="reviews__text-amount">50 and 300 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={disabled} >Submit</button>
      </div>
    </form>
  );
}
