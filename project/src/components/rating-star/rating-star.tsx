import { useState } from 'react';
import { StarRating } from '../../types/rating-star';

type Props = {
  ratings: StarRating;
  addRating: (ratingStar: string) => void;
}

// разобрать звездочки

function RatingStar ({ratings, addRating}: Props): JSX.Element {
  const {value, star, colouration} = ratings;
  const [rating, setRating] = useState(0);

  const handleRatinngStar = () => {
    setRating(value);
    addRating(colouration);
  };

  return (
    <>
      <input
        onChange={handleRatinngStar}
        className="form__rating-input visually-hidden" property={colouration} name="rating" value={value} id={star} type="radio"
      />
      <label htmlFor={star} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33" style={value < rating ? {fill: '#ff9000'} : {}}>
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default RatingStar;
