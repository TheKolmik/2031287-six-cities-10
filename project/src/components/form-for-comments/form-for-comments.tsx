import { useState, ChangeEventHandler } from 'react';
import {StarRating} from '../../types/rating-star';
import RatingStar from '../rating-star/rating-star';

type Props = {
  ratings: StarRating []
}

function ReviewForm ({ratings}: Props): JSX.Element {

  const [comment, setComment] = useState<string>('');

  //при вводе первой буквы показывает в консоле надпись "string" - console.log(comment) - можно с этим что то придумать?

  const handleTestimonialChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setComment(e.target.value);
  };


  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">

        {ratings.map((rating) => {
          const {id} = rating;

          return(
            <div key={id}>
              <RatingStar
                ratings={rating}
              />
            </div>
          );
        })}

      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleTestimonialChange}
        value={comment}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
