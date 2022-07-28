

interface MainProps {
  rating: number,
  classPrefix: string,
  isRatingValue?: boolean
}

export default function Rating({rating, classPrefix, isRatingValue}: MainProps) {
  const MAX_RATING = 5;

  const ratingInPercents = Math.round(rating) / MAX_RATING * 100;
  return (
    <div className={`${classPrefix}__rating rating`}>
      <div className={`${classPrefix}__stars rating__stars`}>
        <span style={{width: `${ratingInPercents}%`}}></span>
        <span className='visually-hidden'>Rating</span>
      </div>
      {isRatingValue ? <span className={`${classPrefix}__rating-value rating__value`}>{rating}</span> : null}
    </div>
  );
}
