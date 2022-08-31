import { useState } from 'react';
import { StarRating } from '../../types/rating-star';

type Props = {
  ratings: StarRating;
}

// разобрать звездочки

function RatingStar ({ratings}: Props): JSX.Element {
  const {star, value} = ratings;
  const [rating, setRating] = useState<string>('');

  const handleRatinngStar = () => {
    setRating(value);
    console.log(value);
  };

  return (
    <>
      <input onClick={handleRatinngStar}
        className="form__rating-input visually-hidden" name="rating" value={value} id={star} type="radio"
      />
      <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default RatingStar;
