import { useState, ChangeEventHandler } from 'react';
import {StarRating} from '../../types/rating-star';
import RatingStar from '../rating-star/rating-star';

type Props = {
  ratings: StarRating [];
  handleCommentAdd: any
}

function ReviewForm ({ratings, handleCommentAdd}: Props): JSX.Element {
  const [rating, setRating] = useState<number>(0);
  console.log(rating);

  const [comment, setComment] = useState<string>('');

  //при вводе первой буквы показывает в консоле надпись "string" - console.log(comment) - можно с этим что то придумать?

  const handleTestimonialChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    handleCommentAdd(comment);
  };
  return (
    <form onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">


        <div className="reviews__rating-form form__rating">
          {new Array(5).fill('').map((element, index) => {
            const handleRatingChange = () => {
              setRating(index);
            };
            const defalutValue = index;
            const id = defalutValue === 1 ? `${defalutValue }-star` : `${defalutValue }-stars`;

            return (
              <div onClick={handleRatingChange} key={id}>
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  defaultValue={defalutValue}
                  id={id}
                  type="radio"
                />
                <label
                  htmlFor={id}
                  className="reviews__rating-label form__rating-label"
                  title="perfect"
                >
                  <svg className="form__star-image" width={37} height={33} style={index > rating ? {fill: '#ff9000'} : {}}>
                    <use xlinkHref="#icon-star" />
                  </svg>
                </label>
              </div>
            );
          })}
        </div>


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
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;

// как мне отключить preventDefault у кнопки формы?
